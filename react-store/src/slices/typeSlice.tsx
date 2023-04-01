import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
//import { clients } from './selectedClientSlice';

export const typeSlice = createSlice({
  name: 'type',
  initialState: '',

  reducers: {
    setType: (state, param) => {
      const { payload } = param;
      return payload;
    },
  },
});

export const { setType } = typeSlice.actions;
export default typeSlice.reducer;
