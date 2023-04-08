import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
//import { clients } from './selectedClientSlice';

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") as string)
    : [],

  reducers: {
    setCartProducts: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setCartProducts } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;
