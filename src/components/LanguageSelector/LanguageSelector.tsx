import { useEffect, useRef, useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const [isOpenDropDown, setIsOpenDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenDropdown(!isOpenDropDown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    if (isOpenDropDown) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenDropDown]);

  return (
    <div className={s.language_selector}>
      <button className={s.icon_wrapper} onClick={toggleDropDown}>
        <svg className={s.icon_globe}>
          <use xlinkHref={`${svg}#icon-globe`} />
        </svg>
      </button>
      {isOpenDropDown && (
        <ul ref={dropdownRef} className={s.dropdown}>
          <li>
            <p>English</p>
          </li>
          <li>
            <p>Ukrainian</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
