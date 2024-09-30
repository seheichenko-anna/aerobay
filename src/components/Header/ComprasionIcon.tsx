import s from '../LanguageSelector/LanguageSelector.module.css';
import svg from '../../assets/sprite.svg';
const ComprasionIcon = () => {
  return (
    <div className={s.icon_wrapper}>
      {' '}
      <svg className={s.icon_globe}>
        <use xlinkHref={`${svg}#icon-comprasion`} />
      </svg>
    </div>
  );
};

export default ComprasionIcon;
