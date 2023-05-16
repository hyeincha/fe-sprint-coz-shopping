import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setData: (state, action) => action.payload,
  },
});

export const { setData } = productsSlice.actions;

export default productsSlice.reducer;
