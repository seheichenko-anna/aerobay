import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDashboard } from '../../../hooks/useDashboard';
import s from './DroneTitle.module.css';

interface DroneTitleProps {
  activeIndex: number;
  titles: string[];
}

const AnimatedDroneTitle: React.FC<{ title: string }> = ({ title }) => {
  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={titleSpring}>
      <h3 className={s.drone_title}>{title}</h3>
      <p className={s.equipment}>(basic equipment)</p>
    </animated.div>
  );
};

const DroneTitle: React.FC<DroneTitleProps> = ({ activeIndex, titles }) => {
  const { isBigScreenOrTablet } = useDashboard();

  return (
    <div
      key={activeIndex}
      className={`${s.drone_title_wrapper} ${isBigScreenOrTablet ? s.drone_title_wrapper_bigscreen : ''}`}
    >
      <AnimatedDroneTitle title={titles[activeIndex]} />
    </div>
  );
};
export default DroneTitle;
