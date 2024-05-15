import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

const Layout = () => {
  return (
    <>
      <div>Header</div>

      {/* тимчасова лінка для перевірки*/}
      <Link to="/">Return Home page</Link>
      <Search />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
