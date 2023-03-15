import React from 'react';
import eventEmitter from './EventEmitter';
import deepEqual from 'deep-equal';

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  shouldComponentUpdate(nextProps) {
    if (!deepEqual(this.props, nextProps)) return true;
    else return false;
  }

  componentDidUpdate() {
    console.log(
      `Client with id ${this.props.clientInfo.id}, first name ${this.props.clientInfo.firstName}, and last name ${this.props.clientInfo.lastName} is (re-)rendering`
    );
  }

  render() {
    const { id, firstName, lastName, balance, status, selected } =
      this.props.clientInfo;

    return (
      <tr
        className={selected ? 'select-color' : 'primary-color'}
        onClick={() => {
          eventEmitter.emit('select', id);
        }}
      >
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{balance}</td>
        <td>{status ? 'active' : 'inactive'}</td>
        <td>
          <button
            className='button-small'
            onClick={(event) => {
              event.stopPropagation();
              eventEmitter.emit('edit', id);
            }}
          >
            Edit
          </button>
          <button
            className='button-small'
            onClick={(event) => {
              event.stopPropagation();
              eventEmitter.emit('delete', id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Client;
