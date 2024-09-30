import { useState } from 'react';
import Accordion from './Accordion';
import s from './Accordion.module.css';
import { Link } from 'react-router-dom';
import svg from '../../assets/sprite.svg';
import style from './Header.module.css';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { accessories } from './products';

export default function AccordionMobileMenu(): JSX.Element {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const items = [
    {
      id: '1',
      title: 'Products',
      content: (
        <>
          <li className={s.menu_item}>
            <div className={s.productsList}>
              <p className={`${style.productItemBtn}`}>
                <svg className={style.productIcon}>
                  <use xlinkHref={`${svg}#icon-drone`} />
                </svg>
                Drone
              </p>
              <ul className={style.dronesList}>
                <li className={style.droneItem}>
                  <Link to={'/'} className={style.linkStyle}>
                    <div
                      className={`${style.electricalDrone} ${style.bigfotoDrone}`}
                    ></div>
                    <h5 className={style.titleCart}>Electrical</h5>
                  </Link>
                </li>
                <li className={style.droneItem}>
                  <Link to={'/'} className={style.linkStyle}>
                    <div
                      className={`${style.hybrideDrone} ${style.bigfotoDrone}`}
                    ></div>
                    <h5 className={style.titleCart}>Hybride</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={s.menu_item}>
            <div className={s.productsList}>
              <p className={`${style.productItemBtn}`}>
                <svg className={style.productIcon}>
                  <use xlinkHref={`${svg}#icon-accessory`} />
                </svg>
                Accessories
              </p>
              <ul className={style.accessoriesList}>
                {accessories.map(accessory => (
                  <li className={style.accessoryItem} key={accessory.id}>
                    <Link to={accessory.link} className={style.linkStyle}>
                      <div
                        className={`${style[accessory.imageClass]} ${style.accessoryStyle}`}
                      ></div>
                      <h5 className={style.titleCart}>{accessory.title}</h5>
                    </Link>
                  </li>
                ))}
                <li className={style.accessoryItem}>
                  <Link to={'/'} className={style.linkStyle}>
                    <button className={style.btnArrow}>
                      <MdOutlineArrowOutward size={24} />
                    </button>
                    <h5 className={style.titleCart}>View all</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </>
      ),
    },
    {
      id: '2',
      title: 'Company',
      content: (
        <>
          <li className={s.menu_item}>
            <Link to="/about-us">About us</Link>
          </li>
          <li className={s.menu_item}>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className={s.menu_item}>
            <Link to="/delivery-and-payments">Delivery & Payments</Link>
          </li>
        </>
      ),
    },
    {
      id: '3',
      title: 'Solutions',
      content: (
        <>
          <li className={s.menu_item}>
            <Link to="/lidar-drone">LiDAR research</Link>
          </li>
          <li className={s.menu_item}>
            <Link to="/agriculture-drone">Agribusiness</Link>
          </li>
          <li className={s.menu_item}>
            <Link to="/drone-viewer">
              Documentation <br /> (photo/video shooting)
            </Link>
          </li>
        </>
      ),
    },
  ];

  return (
    <ul id="accordionExample" className={s.accordion_menu}>
      {items.map(item => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItem === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </ul>
  );
}
