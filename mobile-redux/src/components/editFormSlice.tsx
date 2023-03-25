import { createSlice } from '@reduxjs/toolkit';
import data from '../mockData.json';

export const editFormSlice = createSlice({
  name: 'editFormSlice',
  initialState: false,

  reducers: {
    setEditFormOpen: (state, param) => {
      return param.payload;
    },
  },
});

export const { setEditFormOpen } = editFormSlice.actions;
export default editFormSlice.reducer;
