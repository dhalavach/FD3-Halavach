import React, { useRef } from 'react';
import Client from './Client';
import ee from './EventEmitter';

export default function EditClientForm({
  firstName,
  lastName,
  balance,
  status,
}) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const balanceRef = useRef(null);
  const statusRef = useRef(null);

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
