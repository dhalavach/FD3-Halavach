import { createSlice } from '@reduxjs/toolkit';

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
