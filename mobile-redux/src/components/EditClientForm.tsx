import React, { useRef } from 'react';
import ee from './EventEmitter';
type OptionalClientData = {
  id?: number;
  firstName?: string;
  lastName?: string;
  balance?: number;
  status?: boolean;
  selected?: boolean;
}
export default function EditClientForm(props: {
  data: OptionalClientData;
}) {

 //const { firstName, lastName, balance, status } = props.data; 
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
            defaultValue={props?.data?.firstName}
            ref={firstNameRef}
          />
          <label htmlFor='lastName'>Last name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            defaultValue={props?.data?.lastName}
            ref={lastNameRef}
          />
          <label htmlFor='balance'>Balance:</label>
          <input
            type='number'
            id='balance'
            name='balance'
            defaultValue={props?.data?.balance}
            ref={balanceRef}
          />
          <label htmlFor='status'>Status/Active:</label>
          <input
            type='checkbox'
            id='status'
            name='status'
            defaultChecked={props?.data?.status}
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
