import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import deepEqual from 'deep-equal';
import { PureClient } from './Client';
import EditClientForm from './EditClientForm';
import { ClientData, TableData, RefData, stateData } from '../types/Types';
import { setClients } from './clientsSlice';
import { setDisplayedClients } from './displayedClientsSlice';
import { setAddFormOpen } from './addFormSlice';

function Table(props: { data: TableData }) {
  const { data } = props;
  const dispatch = useDispatch();
  let clients = useSelector((state: stateData) => state?.clients);
  let displayedClients = useSelector(
    (state: stateData) => state?.displayedClients
  );
  let selectedClient = useSelector((state: stateData) => state?.selectedClient);
  const editFormOpen = useSelector((state: stateData) => state.editFormOpen);
  const addFormOpen = useSelector((state: stateData) => state.addFormOpen);

  useEffect(() => {
    console.log('Table re-rendering');
  });

  useEffect(() => {
    dispatch(setClients(data.tbodyData));
    dispatch(setDisplayedClients(data.tbodyData));
  }, []);

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
      {editFormOpen && <EditClientForm data={selectedClient} />}
    </div>
  );
}

export const PureTable = React.memo(Table);
