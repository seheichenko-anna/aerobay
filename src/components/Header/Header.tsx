import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { LuShoppingBag } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import srcLogo from './images/Icon_drone.png';
import srciconDron from './images/icon_dronBW.png';
import srciconAccses from './images/icon_accessoriesBW.png';
import svg from '../../assets/sprite.svg';
import Hamburger from 'hamburger-react';
import useScreenSize from '../../hooks/useScreenSize';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Search from '../Search/Search';
import { accessories } from './products';

type DropdownType = 'products' | 'company' | 'solutions' | null;
type ProductType = 'drones' | 'accessories' | null;

const Header = () => {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState<DropdownType>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);

  const handleToggleDropdown = (dropdown: DropdownType) => {
    setShowDropdown(showDropdown === dropdown ? null : dropdown);
    if (dropdown === 'products') {
      setSelectedProduct('drones');
    } else {
      setSelectedProduct(null);
    }
  };

  const handleProductSelection = (product: ProductType) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  return (
    <>
      {screenSize.width > 375 ? (
        <div className={s.headerWrapper}>
          <header className={s.header}>
            <nav className={s.nav}>
              <div className={s.navItemWrapper}>
                <button
                  className={s.navButton}
                  onClick={() => handleToggleDropdown('products')}
                >
                  Products
                  <span className={s.arrowDown}>
                    <IoIosArrowDown size={20} />
                  </span>
                </button>
              </div>
              {showDropdown === 'products' && (
                <nav className={`${s.dropdown} ${s.dropdownProducts}`}>
                  <ul className={s.productList}>
                    <li
                      className={` ${selectedProduct === 'drones' ? s.activeProduct : null}`}
                    >
                      <button
                        className={`${s.productItemBtn} ${selectedProduct === 'drones' ? s.active : null}`}
                        onClick={() => handleProductSelection('drones')}
                      >
                        <svg className={s.productIcon}>
                          <use xlinkHref={`${svg}#icon-drone`} />
                        </svg>
                        Drone
                      </button>
                    </li>
                    <li
                      className={`${selectedProduct === 'accessories' ? s.activeProduct : null}`}
                    >
                      <button
                        className={`${s.productItemBtn} ${selectedProduct === 'accessories' ? s.active : null}`}
                        onClick={() => handleProductSelection('accessories')}
                      >
                        <svg className={s.productIcon}>
                          <use xlinkHref={`${svg}#icon-accessory`} />
                        </svg>
                        Accessories
                      </button>
                    </li>
                  </ul>

                  {selectedProduct === 'drones' && (
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

                  {selectedProduct === 'accessories' && (
                    <ul className={s.accessoriesList}>
                      {accessories.map(accessory => (
                        <li className={s.accessoryItem} key={accessory.id}>
                          <Link to={accessory.link} className={s.linkStyle}>
                            <div
                              className={`${s[accessory.imageClass]} ${s.accessoryStyle}`}
                            ></div>
                            <h5 className={s.titleCart}>{accessory.title}</h5>
                          </Link>
                        </li>
                      ))}
                      <li className={s.accessoryItem}>
                        <Link to={'/'} className={s.linkStyle}>
                          <button className={s.btnArrow}>
                            <MdOutlineArrowOutward size={24} />
                          </button>
                          <h5 className={s.titleCart}>View all</h5>
                        </Link>
                      </li>
                    </ul>
                  )}
                </nav>
              )}
              <div className={s.navItemWrapper}>
                {' '}
                <button
                  className={s.navButton}
                  onClick={() => handleToggleDropdown('company')}
                >
                  Company{' '}
                  <span className={s.arrowDown}>
                    <IoIosArrowDown size={20} />
                  </span>
                  {showDropdown === 'company' && (
                    <nav className={s.dropdown}>
                      <ul className={s.dropdownList}>
                        <li>
                          <Link to="about-us">About us</Link>
                        </li>
                        <li>
                          <Link to="contact-us">Contact</Link>
                        </li>
                        <li>
                          <Link to="delivery-and-payments">
                            Delivery&Payments
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  )}
                </button>
              </div>

              <div className={s.navItemWrapper}>
                <button
                  className={s.navButton}
                  onClick={() => handleToggleDropdown('solutions')}
                >
                  Solutions{' '}
                  <span className={s.arrowDown}>
                    <IoIosArrowDown size={20} />
                  </span>
                </button>
                {showDropdown === 'solutions' && (
                  <nav className={s.dropdown}>
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
              </div>
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
              <Search />
              <div className={`${s.navButton} ${s.btnGlobalLine}`}>
                <span className={`${s.arrowDown} ${s.arrSearch}`}>
                  {' '}
                  <LanguageSelector />
                </span>
              </div>
              <button className={`${s.navButton} ${s.cartButton}`}>
                Cart{' '}
                <span className={s.arrowDown}>
                  <LuShoppingBag size={20} />
                </span>
              </button>
            </div>
          </header>
        </div>
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
