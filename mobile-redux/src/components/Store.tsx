import { configureStore } from '@reduxjs/toolkit';
import selectedClientSliceReducer from './selectedClientSlice';

export default configureStore({
  reducer: {
    selectedClient: selectedClientSliceReducer,
  },
});
