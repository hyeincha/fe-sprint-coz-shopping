import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';
import BookmarkPage from './pages/BookmarkPage.jsx';
import App, { loader as productLoader } from './App.jsx';
import './index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: productLoader,
    shouldRevalidate: () => false,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/products/list',
        element: <ProductListPage />,
      },
      {
        path: '/bookmark',
        element: <BookmarkPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
