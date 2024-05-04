import { useEffect, useRef, useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [lang, setLang] = useState<string>('en');
  const dropdownRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenDropdown(!isOpenDropdown);
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
    if (isOpenDropdown && btnRef.current) {
      btnRef.current.focus();
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenDropdown]);

  const handleSelectLanguage = (lang: string): void => {
    setLang(lang);
    setIsOpenDropdown(false);
  };

  return (
    <div className={s.language_selector}>
      <button ref={btnRef} className={s.icon_wrapper} onClick={toggleDropDown}>
        <svg className={s.icon_globe}>
          <use xlinkHref={`${svg}#icon-globe`} />
        </svg>
      </button>
      {isOpenDropdown && (
        <ul ref={dropdownRef} className={s.dropdown}>
          <li onClick={() => handleSelectLanguage('en')}>
            <p>English</p>
          </li>
          <li onClick={() => handleSelectLanguage('ua')}>
            <p>Ukrainian</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
