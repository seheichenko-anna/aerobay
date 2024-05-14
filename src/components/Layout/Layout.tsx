import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <div>Header</div>

      {/* тимчасова лінка для перевірки*/}
      <Link to="/">Return Home page</Link>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
