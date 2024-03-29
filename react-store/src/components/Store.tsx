import { configureStore } from "@reduxjs/toolkit";
// import selectedClientSliceReducer from './selectedClientSlice';
import typeReducer from "../slices/typeSlice";
import searchQueryReducer from "../slices/searchQuerySlice";
import sortReducer from "../slices/sortSlice";
import productsReducer from "../slices/productsSlice";
import filteredProductsReducer from "../slices/filteredProductsSlice";
import cartProductsReducer from "../slices/cartProductsSlice";
import ordersReducer from "../slices/ordersSlice";

export default configureStore({
  reducer: {
    type: typeReducer,
    searchQuery: searchQueryReducer,
    sort: sortReducer,
    products: productsReducer,
    filteredProducts: filteredProductsReducer,
    cartProducts: cartProductsReducer,
    orders: ordersReducer,
  },
});
