import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { LuShoppingBag } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import srcLogo from './images/Icon_drone.png';
import svg from '../../assets/sprite.svg';
import Hamburger from 'hamburger-react';
import useScreenSize from '../../hooks/useScreenSize';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Search from '../Search/Search';
import { accessories } from './products';
import DropDown from '../DropDown/Dropdown';
import AccordionMobileMenu from './AccordionMobileMenu';
import ComprasionIcon from './ComprasionIcon';

type DropdownType = 'products' | 'company' | 'solutions' | null;
type ProductType = 'drones' | 'accessories' | null;

const Header = () => {
  const location = useLocation();
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState<DropdownType>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);

  const [openDropdownSolutions, setOpenDropdownSolutions] =
    useState<boolean>(false);
  const [openDropdownCompany, setOpenDropdownCompany] =
    useState<boolean>(false);

  const handleToggleDropdown = (dropdown: DropdownType) => {
    setShowDropdown(showDropdown === dropdown ? null : dropdown);
    if (dropdown === 'products') {
      setSelectedProduct('drones');
    } else {
      setSelectedProduct(null);
    }
  };

  const handleToggleDropDownStyle = (dropdownName: string, isOpen: boolean) => {
    if (dropdownName === 'solutions') setOpenDropdownSolutions(isOpen);
    if (dropdownName === 'company') setOpenDropdownCompany(isOpen);
  };

  const handleProductSelection = (product: ProductType) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {screenSize.width > 768 ? (
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
                <DropDown
                  icon={
                    <div
                      className={
                        openDropdownCompany ? s.navButtonActive : s.navButton
                      }
                    >
                      <span>Company</span>{' '}
                      <span className={s.arrowDown}>
                        {openDropdownCompany ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </span>
                    </div>
                  }
                  items={[
                    { value: '/about-us', label: 'About us' },
                    { value: '/contact-us', label: 'Contact' },
                    {
                      value: '/delivery-and-payments',
                      label: 'Delivery & Payments',
                    },
                  ]}
                  size="191px"
                  handleToggleDropDownStyle={handleToggleDropDownStyle}
                  dropdownName="company"
                />
              </div>

              <div className={s.navItemWrapper}>
                <DropDown
                  icon={
                    <div
                      className={
                        openDropdownSolutions ? s.navButtonActive : s.navButton
                      }
                    >
                      <span>Solutions</span>{' '}
                      <span className={s.arrowDown}>
                        {openDropdownSolutions ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </span>
                    </div>
                  }
                  items={[
                    { value: '/lidar-drone', label: 'LiDAR research' },
                    { value: '/agriculture-drone', label: 'Agribusiness' },
                    {
                      value: '/drone-viewer',
                      label: 'Documentation (photo/video shooting)',
                    },
                  ]}
                  size="227px"
                  handleToggleDropDownStyle={handleToggleDropDownStyle}
                  dropdownName="solutions"
                />
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
                  <LanguageSelector positionY="top" />
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
              </div>
            </Link>
            <div className={s.headerActions}>
              <Search />
              <button className={`${s.navButton} ${s.cartButton}`}>
                <span className={s.arrowDown}>
                  <LuShoppingBag size={20} />
                </span>
              </button>
            </div>
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
              <AccordionMobileMenu />
              <ul className={s.mobileNavList}>
                <li className={s.mobileNavItem}>
                  <span>Language</span>
                  <div className={`${s.navButton} ${s.btnGlobalLine}`}>
                    <span className={`${s.arrowDown} ${s.arrSearch}`}>
                      <LanguageSelector
                        positionY="bottom"
                        positionX="right-0"
                      />
                    </span>
                  </div>
                </li>
                <li className={s.mobileNavItem}>
                  <span>Comprasion</span>
                  <div className={`${s.navButton} ${s.btnGlobalLine}`}>
                    <span className={`${s.arrowDown} ${s.arrSearch}`}>
                      <ComprasionIcon />
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Header;
