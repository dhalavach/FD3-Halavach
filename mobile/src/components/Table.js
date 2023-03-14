import React, { useState, useEffect } from 'react';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import ee from './EventEmitter';

 function Table({ data }) { 
  const [clients, setClients] = useState(data.tbodyData);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState();
  const [selectedClientIndex, setSelectedClientIndex] = useState();

  useEffect(() => {
    ee.addListener('edit', editHandler);
    ee.addListener('select', selectHandler);
    ee.addListener('delete', deleteHandler);
    ee.addListener('save', saveHandler);
    ee.addListener('cancel', cancelHandler);
    ee.addListener('filter', filterHandler);
    return () => {
      ee.removeListener('edit', editHandler);
      ee.removeListener('select', selectHandler);
      ee.removeListener('delete', deleteHandler);
      ee.removeListener('save', saveHandler);
      ee.removeListener('cancel', cancelHandler);
      ee.removeListener('filter', filterHandler);
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
  };

  const saveHandler = ({
    firstNameRef,
    lastNameRef,
    balanceRef,
    statusRef,
  }) => {
    let newClients = [...clients];
    newClients[selectedClientIndex]['firstName'] = firstNameRef.current.value;
    newClients[selectedClientIndex]['lastName'] = lastNameRef.current.value;
    newClients[selectedClientIndex]['balance'] = balanceRef.current.value;
    newClients[selectedClientIndex]['status'] = statusRef.current.checked;

    setClients(newClients);
    setEditFormOpen(false);
  };

  const cancelHandler = () => {
    setEditFormOpen(false);
  };

  const filterHandler = (filterParameter) => {
    if (filterParameter === 'NONE') setClients(data.tbodyData);
    else {
      const newClients = data.tbodyData.filter(
        (c) => c.status === filterParameter
      );
      setClients(newClients);
    }
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
          {clients.map((e) => {
            const selected = e.id === selectedClient?.id;
            return <PureClient {...e } key={e.id} selected={selected} />;
          })}
        </tbody>
      </table>
      {editFormOpen && <EditClientForm {...selectedClient} />}
    </div>
  );
}

export const PureTable = React.memo(Table)
