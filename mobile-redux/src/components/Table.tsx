import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedClient } from './selectedClientSlice';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import ee from './EventEmitter';
import { ClientData, TableData, RefData } from '../types/Types';

import deepEqual from 'deep-equal';
import { setClients } from './clientsSlice';
import { setDisplayedClients } from './displayedClientsSlice';
// import { setEditFormOpen } from './editFormSlice';
// import { setAddFormOpen } from './addFormSlice';

function Table(props: { data: TableData }) {
  let selectedClientIndex = 0; //temp mock value

  const { data } = props;

  // const [clients, setClients] = useState(data.tbodyData);
  // const [displayedClients, setDisplayedClients] = useState(data.tbodyData);

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  // const [selectedClient, setSelectedClient] = useState<ClientData>();
  //const [selectedClientIndex, setSelectedClientIndex] = useState<number>();

  // const useSelectedClient = () => { return useSelector((state) => state.selectedClient) }
  // const {selectedClient} = useSelectedClient()

  // const initialState = {
  //   clients: data.tbodyData,
  //   displayedClients: data.tbodyData,
  //   editFormOpen: false,
  //   addFormOpen: false,
  //   selectedClient: undefined,
  //   selectedClientIndex: undefined,
  // };

  enum Actions {
    setClients,
    setSelectedClients,
    setSelectedClient,
    setSelectedClientIndex,
    setEditFormOpen,
    setAddFormOpen,
  }

  // const rootReducer = (state = initialState, action: any) => {
  //   switch (action.type) {
  //     case Actions.setSelectedClientIndex: {
  //       console.log('selected index dispatched to the store!');
  //       return { ...state, selectedClientIndex: action.payload };
  //     }
  //     case Actions.setSelectedClient: {
  //       return { ...state, selectedClient: action.payload };
  //     }
  //   }
  // };

  // const store = configureStore({ reducer: rootReducer });

  // let selectedClient = store.getState()?.selectedClient;
  // let selectedClientIndex = store.getState()?.selectedClientIndex;

  //const selectedClientIndex = useSelector((state) => state.selectedClientIndex);

  const dispatch = useDispatch();

  dispatch(setClients(data.tbodyData));
  dispatch(setDisplayedClients(data.tbodyData));
  let clients = useSelector((state) => state?.clients);
  let displayedClients = useSelector((state) => state?.displayedClients);
  let selectedClient = useSelector((state) => state?.selectedClient);
  // const editFormOpen = useSelector((state) => state.editFormOpen)
  // const addFormOpen = useSelector((state) => state.addFormOpen)

  // useEffect(() => {

  //   ee.addListener('edit', editHandler);
  //   ee.addListener('select', selectHandler);
  //   ee.addListener('delete', deleteHandler);
  //   ee.addListener('save', saveHandler);
  //   ee.addListener('cancel', cancelHandler);
  //   ee.addListener('filter', filterHandler);
  //   ee.addListener('add', addHandler);
  //   return () => {
  //     ee.removeListener('edit', editHandler);
  //     ee.removeListener('select', selectHandler);
  //     ee.removeListener('delete', deleteHandler);
  //     ee.removeListener('save', saveHandler);
  //     ee.removeListener('cancel', cancelHandler);
  //     ee.removeListener('filter', filterHandler);
  //     ee.removeListener('add', addHandler);
  //   };
  // });

  useEffect(() => {
    console.log('Table re-rendering');
    // console.log('selected client: ', selectedClient);
    // console.log('selected index: ', selectedClientIndex);
  }, );

  const editHandler = (id: number) => {
    selectHandler(id);
    setEditFormOpen(true);
  };

 

  const deleteHandler = (id: number) => {
    let newClients = [...clients].filter((client) => client.id !== id);
    dispatch(setClients(newClients));
    dispatch(setDisplayedClients(newClients));
  };

  const saveHandler = (refObject: RefData) => {
    addFormOpen ? saveNewHandler(refObject) : saveEditedHandler(refObject);
  };

  const saveEditedHandler = (refObject: RefData) => {
    const { firstNameRef, lastNameRef, balanceRef, statusRef } = refObject;

    let newClients = [...clients];
    newClients[selectedClientIndex]['firstName'] = firstNameRef.current.value;
    newClients[selectedClientIndex]['lastName'] = lastNameRef.current.value;
    newClients[selectedClientIndex]['balance'] = balanceRef.current.value;
    newClients[selectedClientIndex]['status'] = statusRef.current.checked;

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
    if (filterParameter === 'NONE') {
      dispatch(setDisplayedClients(clients));
    } else {
      const newClients = clients.filter((c) => c.status === filterParameter);
      //if (!deepEqual(newClients, displayedClients))
      dispatch(setDisplayedClients(newClients));
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
          ee.emit('add');
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
