import React, { useState, useEffect } from 'react';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import ee from './EventEmitter';
import deepEqual from 'deep-equal';

type TableData = {
  heading: string;
  theadData: string[];
  tbodyData: Array<{
    id: number;
    firstName: string;
    lastName: string;
    balance: number;
    status: boolean;
  }>;
};

type ClientData = {
  id: number;
  firstName: string;
  lastName: string;
  balance: number;
  status: boolean;
  selected?: boolean;
}

type RefData = { //temp fix
  firstNameRef: any;
  lastNameRef: any;
  balanceRef: any;
  statusRef: any;
}

function Table(props: { data: TableData }) {
  const { data } = props;
  const [clients, setClients] = useState(data.tbodyData);
  const [displayedClients, setDisplayedClients] = useState(data.tbodyData);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientData>();
  const [selectedClientIndex, setSelectedClientIndex] = useState<number>();

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

  const editHandler = (id: number) => {
    selectHandler(id);
    setEditFormOpen(true);
  };

  const selectHandler = (id: number) => {
    let sci = clients.findIndex((c) => c.id === id);
    setSelectedClientIndex(sci);
    let sc = clients.filter((c) => c.id === id)[0];
     setSelectedClient(sc);
  };

  const deleteHandler = (id: number) => {
    let newClients = [...clients].filter((client) => client.id !== id);
    setClients(newClients);
    setDisplayedClients(newClients);
  };

  const saveHandler = (refObject: RefData) => {
    addFormOpen
      ? saveNewHandler(refObject)
      : saveEditedHandler(refObject);
  };

  const saveEditedHandler = (
refObject: RefData
  ) => {
    const { firstNameRef, lastNameRef, balanceRef, statusRef } = refObject;

    let newClients = [...clients];
    newClients[selectedClientIndex as number]['firstName'] = firstNameRef.current.value;
    newClients[selectedClientIndex as number]['lastName'] = lastNameRef.current.value;
    newClients[selectedClientIndex as number]['balance'] = balanceRef.current.value;
    newClients[selectedClientIndex as number]['status'] = statusRef.current.checked;

    setClients(newClients);
    setDisplayedClients(newClients);
    setEditFormOpen(false);
  };

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

  const cancelHandler = () => {
    if (editFormOpen) setEditFormOpen(false);
    if (addFormOpen) setAddFormOpen(false);
  };

  const filterHandler = (filterParameter: boolean | string) => {
    if (filterParameter === 'NONE') setDisplayedClients(clients);
    else {
      const newClients = clients.filter((c) => c.status === filterParameter);
      if (!deepEqual(newClients, displayedClients))
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
            return <PureClient data={infoObj} key={e.id} />;
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
      {addFormOpen && <EditClientForm data={{}} />}
      {editFormOpen && <EditClientForm data={selectedClient as ClientData } />}
    </div>
  );
}

export const PureTable = React.memo(Table);
