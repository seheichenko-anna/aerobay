import s from './SplitScreen.module.css';
import hybridDrone from '../../assets/split-screen-icon/hybrid-drone.svg';
import svg from '../../assets/sprite.svg';

const SplitScreen = () => {
  return (
    <section className={s.split_screen}>
      <ul className={s.benefits_list}>
        <li className={s.benefits_item}>
          <img
            src={hybridDrone}
            alt="hybrid drone icon"
            className={s.benefit_icon}
          />
          <p className={s.benefit}>Hybrid drone</p>
        </li>
        <li className={s.benefits_item}>
          <svg aria-label="scheme icon" className={s.benefit_icon}>
            <use xlinkHref={`${svg}#icon-scheme`} />
          </svg>
          <p className={s.benefit}>Fast adaptation</p>
        </li>
        <li className={s.benefits_item}>
          <svg aria-label="scheme icon" className={s.benefit_icon}>
            <use xlinkHref={`${svg}#icon-scheme`} />
          </svg>
          <p className={s.benefit}>Ready-made solutions for business</p>
        </li>
        <li className={s.benefits_item}>
          <svg
            aria-label="geophysical exploration icon"
            className={s.benefit_icon}
          >
            <use xlinkHref={`${svg}#icon-geo-exploration`} />
          </svg>
          <p className={s.benefit}>Geophysical Exploration</p>
        </li>
      </ul>
    </section>
  );
};

export default SplitScreen;
