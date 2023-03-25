import { createSlice } from '@reduxjs/toolkit';

export const addFormSlice = createSlice({
  name: 'addFormSlice',
  initialState: false,

  reducers: {
    setAddFormOpen: (state, param) => {
      return param.payload;
    },
  },
});

export const { setAddFormOpen } = addFormSlice.actions;
export default addFormSlice.reducer;
