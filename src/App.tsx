import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CookiesPolicy from './pages/CookiesPolicy';
import DeliveryAndPayments from './pages/DeliveryAndPayments';
import { ReturnsAndRefunds } from './pages/ReturnsAndRefunds';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AgricultureDrone from './pages/DronesBuisnessCards/AgricultureDrone';
import LiDARDrone from './pages/DronesBuisnessCards/LiDARDrone';
import DroneViewer from './pages/DronesBuisnessCards/DroneViewer';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Dashboard from './pages/AdminPanel/Dashboard';
import Accessory from './pages/AdminPanel/Accessory';
import Manufacturer from './pages/AdminPanel/Manufacturer';
import Category from './pages/AdminPanel/Category';
import GroupForDrones from './pages/AdminPanel/GroupForDrones';
import Subcategory from './pages/AdminPanel/Subcategory';
import Drone from './pages/AdminPanel/Drone';
import Catalog from './pages/Catalog/Catalog';
import Comprasion from './components/Comprasion/Comprasion';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:category" element={<Catalog />} />
          <Route path="lidar-drone" element={<LiDARDrone />} />
          <Route path="agriculture-drone" element={<AgricultureDrone />} />
          <Route path="drone-viewer" element={<DroneViewer />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="cookies-policy" element={<CookiesPolicy />} />
          <Route path="comprasion" element={<Comprasion />} />
          <Route
            path="delivery-and-payments"
            element={<DeliveryAndPayments />}
          />
          <Route path="returns-and-refunds" element={<ReturnsAndRefunds />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="admin" element={<AdminPanel />}>
          <Route index element={<Dashboard />} />
          <Route path="accessory" element={<Accessory />} />
          <Route path="category" element={<Category />} />
          <Route path="drone" element={<Drone />} />
          <Route path="group-for-drones" element={<GroupForDrones />} />
          <Route path="manufacturer" element={<Manufacturer />} />
          <Route path="filters" element={<Subcategory />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
