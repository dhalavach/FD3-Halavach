import { createSlice } from '@reduxjs/toolkit';

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
