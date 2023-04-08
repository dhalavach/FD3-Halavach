import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: "",

  reducers: {
    setSort: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
