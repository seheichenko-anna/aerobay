import { useCallback, useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './LanguageSelector.module.css';
import DropDown from '../DropDown/Dropdown';

interface LanguageSelectorProps {
  positionY?: string;
  positionX?: string;
}

const LanguageSelector = ({ positionX, positionY }: LanguageSelectorProps) => {
  const [_, setSelectedLang] = useState<string>('en');

  const handleSelectLanguage = useCallback((lang: string) => {
    setSelectedLang(lang);
  }, []);

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ua', label: 'Ukrainian' },
  ];

  return (
    <DropDown
      icon={
        <div className={s.icon_wrapper}>
          <svg className={s.icon_globe}>
            <use xlinkHref={`${svg}#icon-globe`} />
          </svg>
        </div>
      }
      items={languages}
      onSelect={handleSelectLanguage}
      positionY={positionY}
      positionX={positionX}
    />
  );
};

export default LanguageSelector;
