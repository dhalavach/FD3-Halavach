import React, { useRef } from 'react';
import Client from './Client';
import ee from './EventEmitter';

export default function EditClientForm(props) {
  const firstNameRef = useRef(null);

  const handleSave = (firstNameRef) => {
    ee.emit('save', firstNameRef)
  };
  return (
    <div className='edit-form'>
      <form onSubmit={handleSave}>
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
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          handleSave(firstNameRef)

        }}>
          Save
        </button>
      </form>
    </div>
  );
}
