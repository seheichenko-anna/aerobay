import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { LuShoppingBag } from 'react-icons/lu';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import srcLogo from './images/Icon_drone.png';
import srciconDron from './images/icon_dronBW.png';
import srciconAccses from './images/icon_accessoriesBW.png';
import svg from '../../assets/sprite.svg';
import Hamburger from 'hamburger-react';
import useScreenSize from '../../hooks/useScreenSize';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
// import Search from '../Search/Search';

const Header = () => {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState('');
  const [showDrones, setShowDrones] = useState(true);
  const [showAccessories, setShowAccessories] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);

  const toggleProducts = (clic: string) => {
    if (clic === 'products') {
      setShowProducts(!showProducts);
      setShowCompany(false);
      setShowSolutions(false);
    }
    if (clic === 'company') {
      setShowProducts(false);
      setShowCompany(!showCompany);
      setShowSolutions(false);
    }
    if (clic === 'solutions') {
      setShowProducts(false);
      setShowCompany(false);
      setShowSolutions(!showSolutions);
    }
  };

  const selectProduct = (product: string) => {
    if (product === 'drone') {
      setShowDrones(!showDrones);
      setShowAccessories(false);
    }

    if (product === 'accessories') {
      setShowDrones(false);
      setShowAccessories(!showAccessories);
    }
  };

  const handleSearchClick = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <>
      {screenSize.width > 375 ? (
        <header className={s.header}>
          <nav className={s.nav}>
            <button
              className={s.navButton}
              onClick={() => toggleProducts('products')}
            >
              Products{' '}
              <span className={s.arrowDown}>
                <IoIosArrowDown size={20} />
              </span>
            </button>
            <button
              className={s.navButton}
              onClick={() => toggleProducts('company')}
            >
              Company{' '}
              <span className={s.arrowDown}>
                <IoIosArrowDown size={20} />
              </span>
            </button>
            <button
              className={s.navButton}
              onClick={() => toggleProducts('solutions')}
            >
              Solutions{' '}
              <span className={s.arrowDown}>
                <IoIosArrowDown size={20} />
              </span>
            </button>
          </nav>

          <Link to="/">
            <div className={s.logo}>
              <img src={srcLogo} alt="Logo-dron" />
              <svg>
                <use xlinkHref={`${svg}#icon-logo`} />
              </svg>
            </div>
          </Link>

          <div className={s.headerActions}>
            <div className={`${s.searchContainer}`}>
              {/* <Search /> */}
              <button
                className={`${s.searchButton}`}
                onClick={handleSearchClick}
              >
                <IoSearchOutline size={20} />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className={`${s.searchInput} ${inputVisible ? s.visible : ''}`}
              ></input>
              <IoCloseOutline
                onClick={() => setInputVisible(false)}
                className={`${!inputVisible ? s.closeIcon : ''}`}
              />
            </div>
            <button className={`${s.navButton} ${s.btnGlobalLine}`}>
              <span className={`${s.arrowDown} ${s.arrSearch}`}>
                {' '}
                <LanguageSelector type="header" />
              </span>
            </button>
            <button className={`${s.navButton} ${s.cartButton}`}>
              Cart{' '}
              <span className={s.arrowDown}>
                <LuShoppingBag size={20} />
              </span>
            </button>
          </div>

          {showCompany && (
            <nav className={s.dropdownNav}>
              <ul className={s.dropdownList}>
                <li>
                  <Link to="about-us">About us</Link>
                </li>
                <li>
                  <Link to="contact-us">Contact</Link>
                </li>
                <li>
                  <Link to="delivery-and-payments">Delivery & Payments</Link>
                </li>
              </ul>
            </nav>
          )}

          {showSolutions && (
            <nav className={`${s.dropdownNav} ${s.dropdownPosition}`}>
              <ul className={s.dropdownList}>
                <li>
                  <Link to="lidar-drone">LiDAR research</Link>
                </li>
                <li>
                  <Link to="agriculture-drone">Agribusiness</Link>
                </li>
                <li>
                  <Link to="drone-viewer">
                    Documentation(photo/video shooting)
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {showProducts && (
            <section className={s.dropdownContent}>
              <ul className={s.productList}>
                <li>
                  <button
                    className={s.navButton}
                    onClick={() => selectProduct('drone')}
                  >
                    <img src={srciconDron} alt="" />
                    Drone
                  </button>
                </li>
                <li>
                  <button
                    className={s.navButton}
                    onClick={() => selectProduct('accessories')}
                  >
                    <img src={srciconAccses} alt="" />
                    Accessories
                  </button>
                </li>
              </ul>

              {showDrones && (
                <ul className={s.dronesList}>
                  <li className={s.droneItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.electricalDrone} ${s.bigfotoDrone}`}
                      ></div>
                      <h5 className={s.titleCart}>Electrical</h5>
                    </Link>
                  </li>
                  <li className={s.droneItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.hybrideDrone} ${s.bigfotoDrone}`}
                      ></div>
                      <h5 className={s.titleCart}>Hybride</h5>
                    </Link>
                  </li>
                </ul>
              )}

              {showAccessories && (
                <ul className={s.accessoriesList}>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_scaner} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Scaner</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_camera} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Camera</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_battery} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Battery</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_control_panel} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Control panel</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_antenna} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Antenna</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_tank} ${s.accessoryStyle}`}
                      ></div>
                      <h4 className={s.titleCart}>Tank</h4>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <div
                        className={`${s.foto_base_station} ${s.accessoryStyle}`}
                      ></div>
                      <h5 className={s.titleCart}>Base station</h5>
                    </Link>
                  </li>
                  <li className={s.accessoryItem}>
                    <Link to={'/'} className={s.linkStyle}>
                      <button className={s.btnArrow}>
                        {' '}
                        <MdOutlineArrowOutward size={24} />
                      </button>
                      <h5 className={s.titleCart}>View all</h5>
                    </Link>
                  </li>
                </ul>
              )}
            </section>
          )}
        </header>
      ) : (
        <>
          <header className={s.header}>
            <Link to="/">
              <div className={s.logo}>
                <img src={srcLogo} alt="Logo-dron" />
                <svg>
                  <use xlinkHref={`${svg}#icon-logo`} />
                </svg>
              </div>
            </Link>
            <button className={`${s.navButton} ${s.menuButton}`}>
              <Hamburger
                color="black"
                toggled={isOpen}
                toggle={setOpen}
                size={20}
              />
            </button>
          </header>

          {isOpen && (
            <nav className={s.mobileNav}>
              {
                <div className={s.mobileNavContainer}>
                  <button className={`${s.navButton} ${s.navItem}`}>
                    Products{' '}
                  </button>

                  <button className={`${s.navButton} ${s.navItem}`}>
                    Company
                  </button>

                  <button className={`${s.navButton} ${s.navItem}`}>
                    Solutions
                  </button>
                </div>
              }
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Header;
