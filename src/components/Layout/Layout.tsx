import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
