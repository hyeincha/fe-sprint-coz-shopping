import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getProducts } from './api/apis.js';

export const loader = async () => {
  return await getProducts();
};

function App() {
  const { data } = useLoaderData();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
