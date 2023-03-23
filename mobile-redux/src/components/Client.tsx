import React, { useEffect } from 'react';
import ee from './EventEmitter';
import deepEqual from 'deep-equal';
import {ClientData} from '../types/Types'

function Client(props: { data: ClientData }) {
  const { id, firstName, lastName, balance, status, selected } = props.data;
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

const areEqual = (prevProps: any, nextProps: any) => {
  return deepEqual(prevProps, nextProps);
};

export const PureClient = React.memo(Client, areEqual);
