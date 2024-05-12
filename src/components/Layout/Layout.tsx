import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Layout = () => {
  return (
    <>
      <div>Header</div>
      <Link to='home-page'>Return Home page</Link>
      <Outlet />
      <Reviews/>
      {/* тимчасова лінка для перевірки*/}
      
      
      <Footer />
    </>
  );
};

export default Layout;
