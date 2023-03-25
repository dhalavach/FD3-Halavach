import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedClient } from './selectedClientSlice';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import { ClientData, TableData, RefData } from '../types/Types';

import deepEqual from 'deep-equal';
import { setClients } from './clientsSlice';
import { setDisplayedClients } from './displayedClientsSlice';

import { setEditFormOpen } from './editFormSlice';
import { setAddFormOpen } from './addFormSlice';

// import { setAddFormOpen } from './addFormSlice';

function Table(props: { data: TableData }) {
  //let selectedClientIndex = 0; //temp mock value

  const { data } = props;

  const dispatch = useDispatch();

  let clients = useSelector((state) => state?.clients);
  let displayedClients = useSelector((state) => state?.displayedClients);
  let selectedClient = useSelector((state) => state?.selectedClient);
  const editFormOpen = useSelector((state) => state.editFormOpen);
  const addFormOpen = useSelector((state) => state.addFormOpen);

  useEffect(() => {
    console.log('Table re-rendering');
  });

  useEffect(() => {
    dispatch(setClients(data.tbodyData));
    dispatch(setDisplayedClients(data.tbodyData));
  }, []);

  // const saveHandler = (refObject: RefData) => {
  //   addFormOpen ? saveNewHandler(refObject) : saveEditedHandler(refObject);
  // };

  // const saveEditedHandler = (refObject: RefData) => {
  //   const { firstNameRef, lastNameRef, balanceRef, statusRef } = refObject;
  //     let selectedClientIndex = clients.findIndex((c) => c.id === id);
  //   // setSelectedClientIndex(sci);

  //   let newClients = [...clients];
  //   newClients[selectedClientIndex]['firstName'] = firstNameRef.current.value;
  //   newClients[selectedClientIndex]['lastName'] = lastNameRef.current.value;
  //   newClients[selectedClientIndex]['balance'] = balanceRef.current.value;
  //   newClients[selectedClientIndex]['status'] = statusRef.current.checked;

  //   dispatch(setClients(newClients));
  //   dispatch(setDisplayedClients(newClients));
  //   dispatch(setEditFormOpen(false));
  // };

  const saveNewHandler = (refObject: RefData) => {
    const { firstNameRef, lastNameRef, balanceRef, statusRef } = refObject;

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].id > max) max = clients[i].id;
    }
    const newId = max + 1;

    const newClient = {
      id: newId,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      balance: balanceRef.current.value,
      status: statusRef.current.checked,
    };

    const newClients = [...clients];
    newClients.push(newClient);
    setClients(newClients);
    setDisplayedClients(newClients);
    setAddFormOpen(false);
  };

  

  const filterHandler = (filterParameter: boolean | string) => {
    if (filterParameter === 'NONE') {
      dispatch(setDisplayedClients(clients));
    } else {
      const newClients = [...clients].filter(
        (c) => c.status === filterParameter
      );
      if (!deepEqual(newClients, displayedClients))
        dispatch(setDisplayedClients(newClients));
    }
  };

  // const addHandler = () => {
  //   dispatch(setAddFormOpen(true));
  // };

  return (
    <div>
      <h1>{data.heading}</h1>
      <div className='filter-buttons'>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            filterHandler('NONE');
          }}
        >
          All
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            filterHandler(true);
          }}
        >
          Active
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            filterHandler(false);
          }}
        >
          Inactive
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {data.theadData.map((e) => {
              return (
                <td title={e} key={e}>
                  {e}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {displayedClients.map((e) => {
            const selected = e.id === selectedClient?.id;
            const infoObj = { ...e, selected };
            return <PureClient data={infoObj} key={e.id} />;
          })}
        </tbody>
      </table>
      <button
        className='button-small'
        onClick={(event) => {
          event.stopPropagation();
          dispatch(setAddFormOpen(true));
        }}
      >
        Add new client
      </button>
      {addFormOpen && <EditClientForm data={{}} />}
      {editFormOpen && <EditClientForm data={selectedClient as ClientData} />}
    </div>
  );
}

export const PureTable = React.memo(Table);
