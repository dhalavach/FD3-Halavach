import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import data from '../mockData.json';

export const clientsSlice = createSlice({
  name: 'clientsSlice',
  initialState: [],

  reducers: {
    setClients: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setClients } = clientsSlice.actions;
export default clientsSlice.reducer;
