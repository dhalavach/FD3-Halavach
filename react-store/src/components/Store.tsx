import { configureStore } from '@reduxjs/toolkit';
// import selectedClientSliceReducer from './selectedClientSlice';
import typeReducer from '../slices/typeSlice';
import searchQueryReducer from '../slices/searchQuerySlice';
import sortReducer from '../slices/sortSlice';

export default configureStore({
  reducer: {
    type: typeReducer,
    searchQuery: searchQueryReducer,
    sort: sortReducer,
  },
});
