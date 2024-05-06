import s from './SplitScreen.module.css';
import hybridDrone from '../../assets/split-screen-icon/hybrid-drone.svg';
import svg from '../../assets/sprite.svg';

const SplitScreen = () => {
  return (
    <section className={s.split_screen}>
      <ul className={s.benefits_list}>
        <li>
          <img src={hybridDrone} alt="Hybrid drone icon" />
          <p>Hybrid drone</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${svg}#icon-scheme`} />
          </svg>
          <p>Fast adaptation</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${svg}#icon-scheme`} />
          </svg>
          <p>Ready-made solutions for business</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${svg}#icon-geo-exploration`} />
          </svg>
          <p>Geophysical Exploration</p>
        </li>
      </ul>
    </section>
  );
};

export default SplitScreen;
