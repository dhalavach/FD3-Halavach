import { createSlice } from '@reduxjs/toolkit';

export const selectedClientSlice = createSlice({
  name: 'selectedClientSlice',
  initialState: {},

  reducers: {
    setSelectedClient: (state, action) => {
     return  state = action.payload;
    },
  },
});

export const { setSelectedClient } = selectedClientSlice.actions;
export default selectedClientSlice.reducer;
