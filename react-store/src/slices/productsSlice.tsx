import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
//import { clients } from './selectedClientSlice';

export const productsSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {
    setProducts: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
