import { configureStore } from '@reduxjs/toolkit';
import selectedClientSliceReducer from './selectedClientSlice';
import setClientsReducer from './clientsSlice'
import setDisplayedClientsReducer from './displayedClientsSlice';
import setEditFormOpenReducer from './editFormSlice'
import setAddFormOpenReducer  from './addFormSlice';

export default configureStore({
  reducer: {
    selectedClient: selectedClientSliceReducer,
    clients: setClientsReducer,
    displayedClients: setDisplayedClientsReducer,
    editFormOpen: setEditFormOpenReducer,
    addFormOpen: setAddFormOpenReducer,
    
  },
});
