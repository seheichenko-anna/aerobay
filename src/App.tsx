import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Catalog from './pages/Catalog';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CookiesPolicy from './pages/CookiesPolicy';
import DeliveryAndPayments from './pages/DeliveryAndPayments';
import { ReturnsAndRefunds } from './pages/ReturnsAndRefunds';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="cookies-policy" element={<CookiesPolicy />} />
        <Route path="delivery-and-payments" element={<DeliveryAndPayments />} />
        <Route path="returns-and-refunds" element={<ReturnsAndRefunds />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
