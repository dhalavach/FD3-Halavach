import React from 'react';
import eventEmitter from './EventEmitter';
import deepEqual from 'deep-equal';
import Client from './Client';
import Form from './Form';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      clients: this.props.data.tbodyData,
      displayedClients: this.props.data.tbodyData,
      editFormOpen: false,
      addFormOpen: false,
      selectedClient: '',
      selectedClientIndex: '',
    };
    this.editHandler = this.editHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.saveEditedHandler = this.saveEditedHandler.bind(this);
    this.saveNewHandler = this.saveNewHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  componentDidMount() {
    eventEmitter.addListener('edit', this.editHandler);
    eventEmitter.addListener('select', this.selectHandler);
    eventEmitter.addListener('delete', this.deleteHandler);
    eventEmitter.addListener('save', this.saveHandler);
    eventEmitter.addListener('cancel', this.cancelHandler);
    eventEmitter.addListener('filter', this.filterHandler);
    eventEmitter.addListener('add', this.addHandler);
    console.log('Component Table is mounted');
  }

  componentWillUnmount() {
    eventEmitter.removeListener('edit', this.editHandler);
    eventEmitter.removeListener('select', this.selectHandler);
    eventEmitter.removeListener('delete', this.deleteHandler);
    eventEmitter.removeListener('save', this.saveHandler);
    eventEmitter.removeListener('cancel', this.cancelHandler);
    eventEmitter.removeListener('filter', this.filterHandler);
    eventEmitter.removeListener('add', this.addHandler);
    console.log('Component Table will unmount');
  }

  // shouldComponentUpdate(nextProps) {
  //   if (!deepEqual(this.props, nextProps)) return true;
  //   else return false;
  // }

  componentDidUpdate() {
    console.log('Component Table rendering');
  }

  editHandler = (id) => {
    this.selectHandler(id);
    this.setState({ editFormOpen: true });
  };

  selectHandler = (id) => {
    this.setState({
      selectedClientIndex: this.state.clients.findIndex((c) => c.id === id),
    });
    this.setState({
      selectedClient: this.state.clients.filter((c) => c.id === id)[0],
    });
  };

  deleteHandler = (id) => {
    const newClients = [...this.state.clients].filter(
      (client) => client.id !== id
    );
    this.setState({ clients: newClients });
    this.setState({ displayedClients: newClients });
  };

  saveHandler = ({ firstNameRef, lastNameRef, balanceRef, statusRef }) => {
    this.state.addFormOpen
      ? this.saveNewHandler(firstNameRef, lastNameRef, balanceRef, statusRef)
      : this.saveEditedHandler(
          firstNameRef,
          lastNameRef,
          balanceRef,
          statusRef
        );
  };

  saveEditedHandler(firstNameRef, lastNameRef, balanceRef, statusRef) {
    const newClients = [...this.state.clients];
    newClients[this.state.selectedClientIndex]['firstName'] =
      firstNameRef.current.value;
    newClients[this.state.selectedClientIndex]['lastName'] =
      lastNameRef.current.value;
    newClients[this.state.selectedClientIndex]['balance'] =
      balanceRef.current.value;
    newClients[this.state.selectedClientIndex]['status'] =
      statusRef.current.checked;

    this.setState({ clients: newClients });
    this.setState({ displeydClients: newClients });
    this.setState({ editFormOpen: false });
  }

  saveNewHandler = (firstNameRef, lastNameRef, balanceRef, statusRef) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < this.state.clients.length; i++) {
      if (this.state.clients[i].id > max) max = this.state.clients[i].id;
    }
    const newId = max + 1;

    const newClient = {
      id: newId,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      balance: balanceRef.current.value,
      status: statusRef.current.checked,
    };

    const newClients = [...this.state.clients];
    newClients.push(newClient);
    this.setState({ clients: newClients });
    this.setState({ displayedClients: newClients });
    this.setState({ addFormOpen: false });
  };

  filterHandler = (filterParameter) => {
    if (filterParameter === 'NONE')
      this.setState({ displayedClients: this.state.clients });
    else {
      const newClients = this.state.clients.filter(
        (c) => c.status === filterParameter
      );
      if (!deepEqual(newClients, this.state.displayedClients))
        this.setState({ displayedClients: newClients });
    }
  };

  cancelHandler = () => {
    if (this.state.editFormOpen) this.setState({ editFormOpen: false });
    if (this.state.addFormOpen) this.setState({ addFormOpen: false });
  };

  addHandler = () => {
    this.setState({ addFormOpen: true });
  };

  render() {
    return (
      <div>
        <h1>{this.props.data.heading}</h1>
        <div className='filter-buttons'>
          <button
            className='button-small'
            onClick={(event) => {
              event.stopPropagation();
              eventEmitter.emit('filter', 'NONE');
            }}
          >
            All
          </button>
          <button
            className='button-small'
            onClick={(event) => {
              event.stopPropagation();
              eventEmitter.emit('filter', true);
            }}
          >
            Active
          </button>
          <button
            className='button-small'
            onClick={(event) => {
              event.stopPropagation();
              eventEmitter.emit('filter', false);
            }}
          >
            Inactive
          </button>
        </div>
        <table>
          <thead>
            <tr>
              {this.props.data.theadData.map((e) => {
                return (
                  <td title={e} key={e}>
                    {e}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.displayedClients.map((e) => {
              const selected = e.id === this.state.selectedClient?.id;
              const infoObj = { ...e, selected };
              return <Client {...infoObj} key={e.id} />;
            })}
          </tbody>
        </table>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            eventEmitter.emit('add');
          }}
        >
          Add new client
        </button>
        {this.state.addFormOpen && <Form />}
        {this.state.editFormOpen && <Form {...this.state.selectedClient} />}
      </div>
    );
  }
}

export default Table;
