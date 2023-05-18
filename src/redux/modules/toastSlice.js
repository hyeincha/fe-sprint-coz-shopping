import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: [],
  reducers: {
    setToast: (state, action) => [...state, action.payload],
    deleteToast: (state, action) => state.filter((state) => state.id !== action.payload),
    getToast: (state) => state,
  },
});

export const { setToast, getToast, deleteToast } = toastSlice.actions;

export default toastSlice.reducer;
