import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import data from '../mockData.json';

export const displayedClientsSlice = createSlice({
  name: 'displayedClientsSlice',
  initialState: [],

  reducers: {
    setDisplayedClients: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setDisplayedClients } = displayedClientsSlice.actions;
export default displayedClientsSlice.reducer;
