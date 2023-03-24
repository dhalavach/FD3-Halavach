import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
//import { clients } from './selectedClientSlice';


export const selectedClientSlice = createSlice({
  name: 'selectedClientSlice',
  initialState: {},

  reducers: {
    setSelectedClient: (state, action) => {

     // const clients = useSelector((state) => state.clients)
     // let sc = clients.filter((c) => c.id === id)[0];

     return  state = action.payload;
    },
  },
});

export const { setSelectedClient } = selectedClientSlice.actions;
export default selectedClientSlice.reducer;
