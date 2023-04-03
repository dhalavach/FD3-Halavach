import { createSlice } from '@reduxjs/toolkit';

const arr: any[] = [];


export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {ordersArr: arr},

  reducers: {
    setOrders: (state, action) => {
      state.ordersArr = [...state.ordersArr, action.payload];
    },
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
