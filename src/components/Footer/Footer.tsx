import { Link } from 'react-router-dom';
import svg from '../../assets/sprite.svg';
import s from './Footer.module.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <svg className={s.footer_logo}>
          <use xlinkHref={`${svg}#icon-logo`} />
        </svg>
        <nav className={s.footer_nav}>
          <div className={s.products}>
            <h4 className={s.footer_title}>Products</h4>
            <ul className={s.list_links}>
              <li>
                <Link to="catalog" className={s.link}>
                  Drones
                </Link>
              </li>
              <li>
                <Link to="catalog" className={s.link}>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.information}>
            <h4 className={s.footer_title}>Information</h4>
            <ul className={s.list_links}>
              <li>
                <Link to="delivery-and-payments" className={s.link}>
                  Delivery & Payments
                </Link>
              </li>
              <li>
                <Link to="returns-and-refunds" className={s.link}>
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="cookies-policy" className={s.link}>
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.company}>
            <h4 className={s.footer_title}>Company</h4>
            <ul className={s.list_links}>
              <li>
                <Link to="about-us" className={s.link}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="contact-us" className={s.link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.social_links}>
            <ul className={s.social_links_list}>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Link to Facebook"
                >
                  <div className={s.icon_wrapper}>
                    <svg className={s.social_icon}>
                      <use xlinkHref={`${svg}#icon-facebook`} />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Link to Instagram"
                >
                  <div className={s.icon_wrapper}>
                    <svg className={s.social_icon}>
                      <use xlinkHref={`${svg}#icon-instagram`} />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <LanguageSelector positionX="right-0" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={s.footer_info}>
        <div className={s.footer_info_wrapper}>
          <div className={s.copyright}>
            <p>© 2024 AeroBay</p>
            <p>All rights researved</p>
          </div>
          <ul className={s.payment_list}>
            <li>
              <svg className={s.icon_applepay}>
                <use xlinkHref={`${svg}#icon-applepay`} />
              </svg>
            </li>
            <li>
              <svg className={s.icon_mastercard}>
                <use xlinkHref={`${svg}#icon-mastercard`} />
              </svg>
            </li>
            <li>
              <svg className={s.icon_visa}>
                <use xlinkHref={`${svg}#icon-visa`} />
              </svg>
            </li>
          </ul>
          <Link to="privacy-policy" className={`${s.privacy_policy} ${s.link}`}>
            Privacy Policy <br /> Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
