import { FC, useCallback, useEffect, useRef, useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './LanguageSelector.module.css';

type SelectorTypeProps = {
  type: string;
};

const LanguageSelector: FC<SelectorTypeProps> = ({ type }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [_, setSelectedLang] = useState<string>('en');
  const dropdownRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const toggleDropDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setIsOpenDropdown(prev => !prev);
    },
    []
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpenDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropdown(false);
      }
    },
    [isOpenDropdown]
  );

  const handleOpenDropdown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        setIsOpenDropdown(true);
        setTimeout(() => {
          itemsRef.current[0]?.focus();
        }, 0);
      }
    },
    []
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpenDropdown) {
        setIsOpenDropdown(false);
        btnRef.current?.focus();
      }
    },
    [isOpenDropdown]
  );

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement>) => {
      const focusableElements = itemsRef.current.filter(item => item !== null);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      } else if (event.key === 'Enter') {
        (event.target as HTMLLIElement).click();
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  const handleSelectLanguage = useCallback((lang: string) => {
    setSelectedLang(lang);
    setIsOpenDropdown(false);
    btnRef.current?.focus();
  }, []);

  return (
    <div className={s.language_selector}>
      <button
        ref={btnRef}
        className={s.icon_wrapper}
        onMouseDown={toggleDropDown}
        aria-label="language selector"
        onKeyDown={handleOpenDropdown}
      >
        <svg className={s.icon_globe}>
          <use xlinkHref={`${svg}#icon-globe`} />
        </svg>
      </button>
      {isOpenDropdown && (
        <ul
          ref={dropdownRef}
          tabIndex={0}
          className={`${s.dropdown} ${type === 'footer' ? s.footer : s.header}`}
        >
          {['en', 'ua'].map((lang, index) => (
            <li
              key={lang}
              ref={el => {
                itemsRef.current[index] = el;
              }}
              onClick={() => handleSelectLanguage(lang)}
              onKeyDown={handleTabKeyDown}
              tabIndex={0}
              className={s.dropdown_menu_item}
            >
              <p className={s.dropdown_menu_text}>
                {lang === 'en' ? 'English' : 'Ukrainian'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
