import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
//import { clients } from './selectedClientSlice';

export const selectedClientSlice = createSlice({
  name: 'selectedClientSlice',
  initialState: {},

  reducers: {
    setSelectedClient: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setSelectedClient } = selectedClientSlice.actions;
export default selectedClientSlice.reducer;
