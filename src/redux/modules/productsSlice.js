import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    bookmarks: [],
  },
  reducers: {
    setData: (state, action) => {
      state.products = action.payload;
    },
    setBookmarks: (state, action) => {
      const bookmarkIds = Object.keys(localStorage).map(Number);
      const productMap = new Map(action.payload.map((product) => [product.id, product]));
      const bookmarks = bookmarkIds.map((id) => productMap.get(id));
      state.bookmarks = bookmarks;
    },
    addBookmark: (state, action) => {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    deleteBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.id !== action.payload);
    },
  },
});

export const { setData, setBookmarks, addBookmark, deleteBookmark } = productsSlice.actions;

export default productsSlice.reducer;
