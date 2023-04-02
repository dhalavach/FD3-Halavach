import { configureStore } from '@reduxjs/toolkit';
// import selectedClientSliceReducer from './selectedClientSlice';
import typeReducer from '../slices/typeSlice';
import searchQueryReducer from '../slices/searchQuerySlice';
import sortReducer from '../slices/sortSlice';
import productsReducer from '../slices/productsSlice';
import cartProductsReducer from '../slices/cartProductsSlice';

export default configureStore({
  reducer: {
    type: typeReducer,
    searchQuery: searchQueryReducer,
    sort: sortReducer,
    products: productsReducer,
    cartProducts: cartProductsReducer,
  },
});
