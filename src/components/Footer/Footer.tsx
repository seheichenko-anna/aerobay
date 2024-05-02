import { Link } from 'react-router-dom';
import svg from '../../assets/sprite.svg';
import s from './Footer.module.css';

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
                <Link to="catalog">Drones</Link>
              </li>
              <li>
                <Link to="catalog">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className={s.information}>
            <h4 className={s.footer_title}>Information</h4>
            <ul className={s.list_links}>
              <li>
                <Link to="delivery-and-payments">Delivery & Payments</Link>
              </li>
              <li>
                <Link to="returns-and-refunds">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="cookies-policy">Cookies Policy</Link>
              </li>
            </ul>
          </div>
          <div className={s.company}>
            <h4 className={s.footer_title}>Company</h4>
            <ul className={s.list_links}>
              <li>
                <Link to="about-us">About us</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={s.social_links}>
            <ul className={s.social_links_list}>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <div className={s.icon_wrapper}>
                    <svg className={s.social_icon}>
                      <use xlinkHref={`${svg}#icon-facebook`} />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <div className={s.icon_wrapper}>
                    <svg className={s.social_icon}>
                      <use xlinkHref={`${svg}#icon-instagram`} />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <div className={s.icon_wrapper}>
                  <svg className={s.social_icon}>
                    <use xlinkHref={`${svg}#icon-globe`} />
                  </svg>
                </div>
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
          <Link to="privacy-policy" className={s.privacy_policy}>
            Privacy Policy <br /> Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
