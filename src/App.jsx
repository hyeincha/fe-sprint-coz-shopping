import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
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
