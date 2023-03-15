import React from 'react';
import eventEmitter from './EventEmitter';
import deepEqual from 'deep-equal';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { firstName, lastName, balance, status } = this.props;

    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const balanceRef = React.createRef();
    const statusRef = React.createRef();

    return (
      <div className='edit-form'>
        <form>
          <div className='edit-form-fields-container'>
            <label htmlFor='firstName'>First name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              defaultValue={firstName}
              ref={firstNameRef}
            />
            <label htmlFor='lastName'>Last name:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              defaultValue={lastName}
              ref={lastNameRef}
            />
            <label htmlFor='balance'>Balance:</label>
            <input
              type='number'
              id='balance'
              name='balance'
              defaultValue={balance}
              ref={balanceRef}
            />
            <label htmlFor='status'>Status/Active:</label>
            <input
              type='checkbox'
              id='status'
              name='status'
              defaultChecked={status}
              ref={statusRef}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              eventEmitter.emit('save', {
                firstNameRef: firstNameRef,
                lastNameRef: lastNameRef,
                balanceRef: balanceRef,
                statusRef: statusRef,
              });
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              eventEmitter.emit('cancel');
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
