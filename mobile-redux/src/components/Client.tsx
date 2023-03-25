import React, { useEffect } from 'react';
import deepEqual from 'deep-equal';
import { ClientData } from '../types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedClient } from './selectedClientSlice';
import { setClients } from './clientsSlice';
import { setDisplayedClients } from './displayedClientsSlice';
import { setEditFormOpen } from './editFormSlice';


function Client(props: { data: ClientData }) {
  const { id, firstName, lastName, balance, status, selected } = props.data;
  useEffect(() => {
    console.log(
      `Client with id ${id}, first name ${firstName}, and last name ${lastName} is (re-)rendering`
    );
  });
  let clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  const selectHandler = (id: number) => {
    // let sci = clients.findIndex((c) => c.id === id);
    // setSelectedClientIndex(sci);
    let sc = [...clients].filter((c) => c.id === id)[0];
    dispatch(setSelectedClient(sc));
  
  };

  const deleteHandler = (id: number) => {
    let newClients = [...clients].filter((client) => client.id !== id);
    dispatch(setClients(newClients));
    dispatch(setDisplayedClients(newClients));
  };

  const editHandler = (id: number) => {
    selectHandler(id);
    dispatch(setEditFormOpen(true));
  };
  return (
    <tr
      className={selected ? 'select-color' : 'primary-color'}
      onClick={(event) => {
        event.stopPropagation();
        selectHandler(id);
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
            editHandler(id);
          }}
        >
          Edit
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            deleteHandler(id);
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
