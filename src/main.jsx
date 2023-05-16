import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import ProductListPage from './pages/ProductListPage.jsx';
import BookmarkPage from './pages/BookmarkPage.jsx';
import App, { loader as productLoader } from './App.jsx';
import './index.css';

if (!localStorage.getItem('bookmarks')) {
  localStorage.setItem('bookmarks', []);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: productLoader,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
