import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import data from '../mockData.json';


export const clientsSlice = createSlice({
  name: 'clientsSlice',
  initialState: data,

  reducers: {
    setClients: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { setClients } = clientsSlice.actions;
export default clientsSlice.reducer;
