import { createSlice } from '@reduxjs/toolkit';

export const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: '',

  reducers: {
    setSearchQuery: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
