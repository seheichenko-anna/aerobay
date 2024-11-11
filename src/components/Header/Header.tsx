import Hamburger from 'hamburger-react';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { LuShoppingBag } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import srcLogo from './images/Icon_drone.png';
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
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/catalog')) {
      setShowDropdown(null);
    }
  }, [location.pathname]);
  const handleToggleDropdown = (dropdown: DropdownType) => {
    setShowDropdown(showDropdown === dropdown ? null : dropdown);
    if (dropdown === 'products') {
      setSelectedProduct('drones');
    } else {
      setSelectedProduct(null);
    }
  };

  const handleProductSelection = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

  const [openDropdownSolutions, setOpenDropdownSolutions] =
    useState<boolean>(false);
  const [openDropdownCompany, setOpenDropdownCompany] =
    useState<boolean>(false);

  const handleToggleDropDownStyle = (dropdownName: string, isOpen: boolean) => {
    if (dropdownName === 'solutions') setOpenDropdownSolutions(isOpen);
    if (dropdownName === 'company') setOpenDropdownCompany(isOpen);
  };

  useEffect(() => {
    if (isOpen || showDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, showDropdown]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const closeDropdown = () => {
    setShowDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    if (showDropdown) {
      document.body.style.pointerEvents = 'none';
      if (dropdownRef.current) {
        dropdownRef.current.style.pointerEvents = 'auto';
      }

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscPress);
    } else {
      document.body.style.pointerEvents = 'auto';
    }

    return () => {
      document.body.style.pointerEvents = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [showDropdown]);

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
                  <span
                    className={`${s.arrowDown} ${showDropdown ? s.active : ''}`}
                  >
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
                        <Link to={'/catalog/drones'} className={s.linkStyle}>
                          <div
                            className={`${s.electricalDrone} ${s.bigfotoDrone}`}
                          ></div>
                          <h5 className={s.titleCart}>Electrical</h5>
                        </Link>
                      </li>
                      <li className={s.droneItem}>
                        <Link to={'/catalog/drones'} className={s.linkStyle}>
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
                        <Link
                          to={'/catalog/accessories'}
                          className={s.linkStyle}
                        >
                          <span className={s.btnArrow}>
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
                    <button
                      aria-label="Company menu"
                      className={
                        openDropdownCompany ? s.navButtonActive : s.navButton
                      }
                    >
                      <span>Company</span>{' '}
                      <span
                        className={`${s.arrowDown} ${openDropdownCompany ? s.active : ''}`}
                      >
                        <IoIosArrowDown size={20} />
                      </span>
                    </button>
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
                    <button
                      aria-label="Solutions menu"
                      className={
                        openDropdownSolutions ? s.navButtonActive : s.navButton
                      }
                    >
                      <span>Solutions</span>{' '}
                      <span
                        className={`${s.arrowDown} ${openDropdownSolutions ? s.active : ''}`}
                      >
                        <IoIosArrowDown size={20} />
                      </span>
                    </button>
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
