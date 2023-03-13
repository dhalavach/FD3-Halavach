import React from 'react';
import ee from './EventEmitter';

export default function Client({ id, firstName, lastName, balance, status }) {
 



  return (
    <tr
      onClick={() => {
        ee.emit('select' , id)
      }}
    >
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{balance}</td>
      <td>{status ? 'active' : 'inactive'}</td>
      <td>
        <button onClick={(e) => {
          e.stopPropagation()
        ee.emit('edit', id)
        }}>Edit</button>
      </td>
    </tr>
  );
}
