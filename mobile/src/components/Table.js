import React, { useState, useEffect } from 'react';
import Client from './Client';
import EditClientForm from './EditClientForm';
import ee from './EventEmitter';

export default function Table({ data }) {
  const [clients, setClients] = useState(data.tbodyData);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedClientIndex, setSelectedClientIndex] = useState('');

  useEffect(() => {
    ee.addListener('edit', editHandler);
    ee.addListener('select', selectHandler);
    ee.addListener('save', saveHandler);
    return () => {
      ee.removeListener('edit', editHandler);
      ee.removeListener('select', selectHandler);
      ee.removeListener('save', saveHandler);
    };
  }, []);

  useEffect(() => {
    console.log('selected client: ', selectedClient);
    console.log('selected index: ', selectedClientIndex);
  }, [selectedClient, selectedClientIndex]);

  function editHandler(id) {
    console.log('using edit event...');
    setSelectedClient(clients.filter((c) => c.id === id)[0]);
    setSelectedClientIndex(clients.findIndex((c) => c.id === id));
    setEditFormOpen(true);
  }

  function selectHandler(id) {
    setSelectedClient(clients.filter((c) => c.id === id)[0]);
    setSelectedClientIndex(clients.findIndex((c) => c.id === id));
  }

  function saveHandler(firstNameRef) {
    console.log(firstNameRef.current.value);
  }

  return (
    <div>
      <h1>{data.heading}</h1>
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
          {data.tbodyData.map((e) => {
            return (
              <Client
                id={e.id}
                key={e.id}
                firstName={e.firstName}
                lastName={e.lastName}
                balance={e.balance}
                status={e.status}
              />
            );
          })}
        </tbody>
      </table>
      {editFormOpen && <EditClientForm {...selectedClient} />}
    </div>
  );
}
