import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <div>Header</div>
      <Header/>
      <Outlet />  
      <Footer />
    </>
  );
};

export default Layout;
