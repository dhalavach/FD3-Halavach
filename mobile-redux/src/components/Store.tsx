import { configureStore } from '@reduxjs/toolkit';
import selectedClientSliceReducer from './selectedClientSlice';
import setClientsReducer from './clientsSlice'
import setDisplayedClientsReducer from './displayedClientsSlice';

export default configureStore({
  reducer: {
    selectedClient: selectedClientSliceReducer,
    clients: setClientsReducer,
    displayedClients: setDisplayedClientsReducer
    
  },
});
