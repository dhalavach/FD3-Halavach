import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../mockData.json';
import { TableState } from '../../types/Types';

const initialState: TableState = {
  clients: [],
  displayedClients: [],
  selectedClient: undefined,
  selectedClientIndex: undefined,
  editFormOpen: false,
  addFormOpen: false,
};
const dispatch = useDispatch();
const clients = useSelector((state) => state.clients);

const tableSlice = createSlice({
  name: 'tableSlice',
  initialState: initialState,

  reducers: {
    setClients: (state, param) => {
      return param.payload;
    },
    setDisplayedClients: (state, param) => {
      state = param.payload;
    },
  },
});

export const { setClients, setDisplayedClients } = tableSlice.actions;
export default tableSlice.reducer;
