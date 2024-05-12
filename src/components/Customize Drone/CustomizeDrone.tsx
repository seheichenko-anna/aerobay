import { Link } from 'react-router-dom';
import s from './CustomizeDrone.module.css';
import liddarDrone from '../../assets/customize-drone/lidDAR-drone.png';

const CustomizeDrone = () => {
  return (
    <section className={s.customize_drone_section}>
      <div className={s.container}>
        <h2>
          <span className={s.accent_color}>Customize</span> Your own Drone for
          your Business Need
        </h2>
        <p>You can choose a base drone tailored to suit your business needs</p>
      </div>

      <div className={s.drone_background}>
        <h3>LIDDrone 200 </h3>
        <p>(basic equipment)</p>
        <img src={liddarDrone} />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <p></p>
          <p></p>
          <Link to="lidar-drone">Bye base model</Link>
        </div>
      </div>
      <p>
        Or You can Customize Base Drone by adding /deleting accessories which
        are more accomplish to your business
      </p>
      <Link to="customize-drone">Customize the drone</Link>
    </section>
  );
};

export default CustomizeDrone;
