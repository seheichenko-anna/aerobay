import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Layout = () => {
  return (
    <>
      <div>Header</div>
         {/* тимчасова лінка для перевірки*/}
      <Link to="/">Return Home page</Link>
      <Outlet />
      <Reviews/>
      {/* тимчасова лінка для перевірки*/}
      
      
      <Footer />
    </>
  );
};

export default Layout;