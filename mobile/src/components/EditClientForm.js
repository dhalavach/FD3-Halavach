import React, { useRef } from 'react';
import Client from './Client';
import ee from './EventEmitter';

export default function EditClientForm(props) {
  const firstNameRef = useRef();

  const handleSave = (firstNameRef) => {
    ee.emit('save', firstNameRef);
  };
  return (
    <div className='edit-form'>
      <form>
        <div className='edit-form-fields-container'>
          <label htmlFor='name'>First name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            defaultValue={props.firstName}
            ref={firstNameRef}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            ee.emit('save', firstNameRef);
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
