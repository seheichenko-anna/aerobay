import { Link } from 'react-router-dom';
import s from './DroneCard.module.css';
import svg from '../../../assets/sprite.svg';

interface DroneItemProps {
  linkTo: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const DroneCard: React.FC<DroneItemProps> = ({
  linkTo,
  imgSrc,
  imgAlt,
  title,
}) => {
  return (
    <Link
      to={linkTo}
      className={s.slider_wrapper}
      aria-label={`Link to ${title} drone`}
    >
      <img src={imgSrc} className={s.img_drone} alt={imgAlt} />
      <div className={s.arrow_wrapper}>
        <svg className={s.arrow} aria-label="arrow icon">
          <use xlinkHref={`${svg}#icon-arrow-up-right`} />
        </svg>
      </div>
      <h3 className={s.drone_title}>LiDAR research</h3>
    </Link>
  );
};

export default DroneCard;
