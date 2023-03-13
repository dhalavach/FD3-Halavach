import React, { useRef } from 'react';
import Client from './Client';
import ee from './EventEmitter';

export default function EditClientForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const balanceRef = useRef();
  const statusRef = useRef();

  const handleSave = (firstNameRef) => {
    ee.emit('save', firstNameRef);
  };
  return (
    <div className='edit-form'>
      <form>
        <div className='edit-form-fields-container'>
          <label htmlFor='firstName'>First name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            defaultValue={props.firstName}
            ref={firstNameRef}
          />
          <label htmlFor='lastName'>Last name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            defaultValue={props.lastName}
            ref={lastNameRef}
          />
          <label htmlFor='balance'>Balance:</label>
          <input
            type='number'
            id='balance'
            name='balance'
            defaultValue={props.balance}
            ref={balanceRef}
          />
          <label htmlFor='status'>Status:</label>
          <input
            type='checkbox'
            id='status'
            name='status'
            defaultValue={props.status}
            ref={statusRef}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            ee.emit('save', {
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
            ee.emit('cancel');
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
