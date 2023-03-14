import React, { useState, useEffect } from 'react';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import ee from './EventEmitter';

function Table({ data }) {
  const [clients, setClients] = useState(data.tbodyData);
  const [displayedClients, setDisplayedClients] = useState(data.tbodyData);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState();
  const [selectedClientIndex, setSelectedClientIndex] = useState();

  useEffect(() => {
    ee.addListener('edit', editHandler);
    ee.addListener('select', selectHandler);
    ee.addListener('delete', deleteHandler);
    ee.addListener('save', saveHandler);
    ee.addListener('cancel', cancelHandler);
    ee.addListener('filter', filterHandler);
    ee.addListener('add', addHandler);
    return () => {
      ee.removeListener('edit', editHandler);
      ee.removeListener('select', selectHandler);
      ee.removeListener('delete', deleteHandler);
      ee.removeListener('save', saveHandler);
      ee.removeListener('cancel', cancelHandler);
      ee.removeListener('filter', filterHandler);
      ee.removeListener('add', addHandler);
    };
  });

  useEffect(() => {
    console.log('Table re-rendering');
    // console.log('selected client: ', selectedClient);
    // console.log('selected index: ', selectedClientIndex);
  });

  const editHandler = (id) => {
    selectHandler(id);
    setEditFormOpen(true);
  };

  const selectHandler = (id) => {
    let sci = clients.findIndex((c) => c.id === id);
    setSelectedClientIndex(sci);
    let sc = clients.filter((c) => c.id === id)[0];
    setSelectedClient(sc);
  };

  const deleteHandler = (id) => {
    let newClients = [...clients].filter((client) => client.id !== id);
    setClients(newClients);
    setDisplayedClients(newClients);
  };

  const saveHandler = ({
    firstNameRef,
    lastNameRef,
    balanceRef,
    statusRef,
  }) => {
    addFormOpen
      ? saveNewHandler(firstNameRef, lastNameRef, balanceRef, statusRef)
      : saveEditedHandler(firstNameRef, lastNameRef, balanceRef, statusRef);
  };

  const saveEditedHandler = (
    firstNameRef,
    lastNameRef,
    balanceRef,
    statusRef
  ) => {
    let newClients = [...clients];
    newClients[selectedClientIndex]['firstName'] = firstNameRef.current.value;
    newClients[selectedClientIndex]['lastName'] = lastNameRef.current.value;
    newClients[selectedClientIndex]['balance'] = balanceRef.current.value;
    newClients[selectedClientIndex]['status'] = statusRef.current.checked;

    setClients(newClients);
    setDisplayedClients(newClients);
    setEditFormOpen(false);
  };

  const saveNewHandler = (firstNameRef, lastNameRef, balanceRef, statusRef) => {
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

  const cancelHandler = () => {
    if (editFormOpen) setEditFormOpen(false);
    if (addFormOpen) setAddFormOpen(false);
  };

  const filterHandler = (filterParameter) => {
    if (filterParameter === 'NONE') setDisplayedClients(clients);
    else {
      const newClients = clients.filter((c) => c.status === filterParameter);
      setDisplayedClients(newClients);
    }
  };

  const addHandler = () => {
    setAddFormOpen(true);
  };

  return (
    <div>
      <h1>{data.heading}</h1>
      <div className='filter-buttons'>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            ee.emit('filter', 'NONE');
          }}
        >
          All
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            ee.emit('filter', true);
          }}
        >
          Active
        </button>
        <button
          className='button-small'
          onClick={(event) => {
            event.stopPropagation();
            ee.emit('filter', false);
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
            return <PureClient clientInfo={infoObj} key={e.id} />;
          })}
        </tbody>
      </table>
      <button
        className='button-small'
        onClick={(event) => {
          event.stopPropagation();
          ee.emit('add');
        }}
      >
        Add new client
      </button>
      {addFormOpen && <EditClientForm />}
      {editFormOpen && <EditClientForm {...selectedClient} />}
    </div>
  );
}

export const PureTable = React.memo(Table);
