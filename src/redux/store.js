import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './modules/productsSlice';
import toastSlice from './modules/toastSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
    toast: toastSlice,
  },
});
