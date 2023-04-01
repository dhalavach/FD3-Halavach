import { configureStore } from '@reduxjs/toolkit';
// import selectedClientSliceReducer from './selectedClientSlice';
import typeReducer from '../slices/typeSlice';

export default configureStore({
  reducer: {
    type: typeReducer,
    // selectedClient: selectedClientSliceReducer,
    // clients: setClientsReducer,
    // displayedClients: setDisplayedClientsReducer,
    // editFormOpen: setEditFormOpenReducer,
    // addFormOpen: setAddFormOpenReducer,
  },
});
