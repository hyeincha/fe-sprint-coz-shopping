import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './modules/productsSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
