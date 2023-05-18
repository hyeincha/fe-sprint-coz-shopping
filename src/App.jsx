import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getProducts } from './api/apis.js';
import { useDispatch } from 'react-redux';
import { setData, setBookmarks } from './redux/modules/productsSlice.js';
import { useEffect } from 'react';
import ToastContainer from './components/view/ToastContainer.jsx';

export const loader = async () => {
  return await getProducts();
};

function App() {
  const { data } = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(data));
    dispatch(setBookmarks(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
