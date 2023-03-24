import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import data from '../mockData.json';


export const displayedClientsSlice = createSlice({
  name: 'displayedClientsSlice',
  initialState: data,

  reducers: {
    setDisplayedClients: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { setDisplayedClients } = displayedClientsSlice.actions;
export default displayedClientsSlice.reducer;
