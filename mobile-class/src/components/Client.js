import React from 'react';
import eventEmitter from './EventEmitter';
import deepEqual from 'deep-equal';

class Client extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // shouldComponentUpdate(nextProps) {
  //   if (!deepEqual(this.props, nextProps)) return true;
  //   else return false;
  // }

  // componentDidMount() {
  //   console.log(
  //     `Client ${this.props.firstName} ${this.props.lastName} with id ${this.props.id} is mounted`
  //   );
  // }

  // componentDidUpdate() {
  //   console.log(
  //     `Client ${this.props.firstName} ${this.props.lastName} with id ${this.props.id} is rendering`
  //   );
  // }

  // componentWillUnmount() {
  //   console.log(
  //     `Client ${this.props.firstName} ${this.props.lastName} with id ${this.props.id} is unmounting`
  //   );
  // }

  render() {
    const { id, firstName, lastName, balance, status, selected } = this.props;
    console.log(`Client ${firstName} ${lastName} with id ${id} is rendering`);

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
