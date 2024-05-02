import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
