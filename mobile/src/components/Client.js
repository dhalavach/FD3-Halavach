import React, { useEffect } from 'react';
import ee from './EventEmitter';
import deepEqual from 'deep-equal';

function Client({ id, firstName, lastName, balance, status, selected }) {
  useEffect(() => {
    console.log(
      `Client with id ${id}, first name ${firstName}, and last name ${lastName} is (re-)rendering`
    );
  });

  return (
    <tr
      className={selected ? 'select-color' : 'primary-color'}
      onClick={() => {
        ee.emit('select', id);
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
            ee.emit('edit', id);
          }}
        >
          Edit
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            ee.emit('delete', id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const areEqual = (prevProps, nextProps) => {
  return deepEqual(prevProps, nextProps);
};

export const PureClient = React.memo(Client, areEqual);
