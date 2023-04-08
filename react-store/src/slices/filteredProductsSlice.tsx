import { createSlice } from "@reduxjs/toolkit";

export const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: [],

  reducers: {
    setFilteredProducts: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setFilteredProducts } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
