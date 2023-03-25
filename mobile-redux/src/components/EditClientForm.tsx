import { useRef } from 'react';
import { setEditFormOpen } from './editFormSlice';
import { useSelector, useDispatch } from 'react-redux';
import ee from './EventEmitter';
import { setClients } from './clientsSlice';
import { setDisplayedClients } from './displayedClientsSlice';
import { ClientData, RefData } from '../types/Types';
import { setAddFormOpen } from './addFormSlice';

type OptionalClientData = {
  id?: number;
  firstName?: string;
  lastName?: string;
  balance?: number;
  status?: boolean;
  selected?: boolean;
};
export default function EditClientForm(props: { data: OptionalClientData }) {
  //const { firstName, lastName, balance, status } = props.data;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const balanceRef = useRef(null);
  const statusRef = useRef(null);

  const dispatch = useDispatch();
  let editFormOpen = useSelector((state) => state.editFormOpen);

  let addFormOpen = useSelector((state) => state.addFormOpen);
  let clients = useSelector((state) => state.clients);
  let selectedClient = useSelector((state) => state.selectedClient);

  const saveHandler = (refObject: RefData) => {
    addFormOpen ? saveNewHandler(refObject) : saveEditedHandler(refObject);
  };

  const saveEditedHandler = (refObject: RefData) => {
    const { firstNameRef, lastNameRef, balanceRef, statusRef } = refObject;
    let selectedClientIndex = clients.findIndex(
      (c: ClientData) => c.id === selectedClient.id
    );

    let newClients = [...clients];
    console.log('test');
    newClients[selectedClientIndex]['firstName'] = firstNameRef.current.value;
    newClients[selectedClientIndex]['lastName'] = lastNameRef.current.value;
    newClients[selectedClientIndex]['balance'] = balanceRef.current.value;
    newClients[selectedClientIndex]['status'] = statusRef.current.checked;

    dispatch(setClients(newClients));
    dispatch(setDisplayedClients(newClients));
    dispatch(setEditFormOpen(false));
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
    dispatch(setClients(newClients));
    dispatch(setDisplayedClients(newClients));
    dispatch(setAddFormOpen(false));
  };

  const cancelHandler = () => {
    if (editFormOpen) dispatch(setEditFormOpen(false));
    if (addFormOpen) dispatch(setAddFormOpen(false));
  };

  return (
    <div className='edit-form'>
      <form>
        <div className='edit-form-fields-container'>
          <label htmlFor='firstName'>First name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            defaultValue={props?.data?.firstName}
            ref={firstNameRef}
          />
          <label htmlFor='lastName'>Last name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            defaultValue={props?.data?.lastName}
            ref={lastNameRef}
          />
          <label htmlFor='balance'>Balance:</label>
          <input
            type='number'
            id='balance'
            name='balance'
            defaultValue={props?.data?.balance}
            ref={balanceRef}
          />
          <label htmlFor='status'>Status/Active:</label>
          <input
            type='checkbox'
            id='status'
            name='status'
            defaultChecked={props?.data?.status}
            ref={statusRef}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            saveHandler({
              firstNameRef: firstNameRef,
              lastNameRef: lastNameRef,
              balanceRef: balanceRef,
              statusRef: statusRef,
            });
          }}
        >
          Save
        </button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </div>
  );
}
