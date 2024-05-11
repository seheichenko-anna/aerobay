import s from './ThreeTypesOfDrones.module.css';
import svg from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const ThreeTypesOfDrones = () => {
  return (
    <section className={s.three_drones}>
      <h2 className={s.section_title}>
        Your Vision, <span className={s.title_accent}>Your Drone,</span> <br />{' '}
        Your Success
      </h2>
      <ul className={s.three_drones_list}>
        <li className={s.lidar_research}>
          <Link to="lidar-drone" className={s.arrow_wrapper}>
            <svg className={s.arrow}>
              <use xlinkHref={`${svg}#icon-arrow-up-right`} />
            </svg>
          </Link>
          <h3 className={s.drone_title}>LiDAR research</h3>
        </li>
        <li className={s.agribusiness}>
          <Link to="agriculture-drone" className={s.arrow_wrapper}>
            <svg className={s.arrow}>
              <use xlinkHref={`${svg}#icon-arrow-up-right`} />
            </svg>
          </Link>
          <h3 className={s.drone_title}>Agribusiness</h3>
        </li>
        <li className={s.photo_video_production}>
          <Link to="drone-viewer" className={s.arrow_wrapper}>
            <svg className={s.arrow}>
              <use xlinkHref={`${svg}#icon-arrow-up-right`} />
            </svg>
          </Link>
          <h3 className={s.drone_title}>Photo-video production</h3>
        </li>
      </ul>
    </section>
  );
};

export default ThreeTypesOfDrones;
