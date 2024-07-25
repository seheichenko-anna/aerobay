import { useCallback, useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './LanguageSelector.module.css';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const LanguageSelector = () => {
  const [_, setSelectedLang] = useState<string>('en');

  const handleSelectLanguage = useCallback((lang: string) => {
    setSelectedLang(lang);
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="inline-flex w-full justify-center"
        aria-label="language selector"
      >
        <div className={s.icon_wrapper}>
          <svg className={s.icon_globe}>
            <use xlinkHref={`${svg}#icon-globe`} />
          </svg>
        </div>
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        {['en', 'ua'].map((lang, index) => (
          <MenuItem key={index}>
            <a
              href="#"
              key={lang}
              onClick={() => handleSelectLanguage(lang)}
              className={s.dropdown_menu_item}
            >
              <p className={s.dropdown_menu_text}>
                {lang === 'en' ? 'English' : 'Ukrainian'}
              </p>
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default LanguageSelector;
