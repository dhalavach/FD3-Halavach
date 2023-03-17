import React from 'react';
import eventEmitter from './EventEmitter';
import deepEqual from 'deep-equal';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.balanceRef = React.createRef();
    this.statusRef = React.createRef();
  }

  render() {
    const { firstName, lastName, balance, status } = this.props;

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
              ref={this.firstNameRef}
            />
            <label htmlFor='lastName'>Last name:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              defaultValue={lastName}
              ref={this.lastNameRef}
            />
            <label htmlFor='balance'>Balance:</label>
            <input
              type='number'
              id='balance'
              name='balance'
              defaultValue={balance}
              ref={this.balanceRef}
            />
            <label htmlFor='status'>Status/Active:</label>
            <input
              type='checkbox'
              id='status'
              name='status'
              defaultChecked={status}
              ref={this.statusRef}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              eventEmitter.emit('save', {
                firstNameRef: this.firstNameRef,
                lastNameRef: this.lastNameRef,
                balanceRef: this.balanceRef,
                statusRef: this.statusRef,
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
