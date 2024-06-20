import React from 'react';
import { useDashboard } from '../../../hooks/useDashboard';
import s from './DroneTitle.module.css';

interface DroneTitleProps {
  activeIndex: number;
  titles: string[];
}

const DroneTitle: React.FC<DroneTitleProps> = ({ activeIndex, titles }) => {
  const { isBigScreenOrTablet } = useDashboard();

  return (
    <div
      key={activeIndex}
      className={`${s.drone_title_wrapper} ${isBigScreenOrTablet ? s.drone_title_wrapper_bigscreen : ''}`}
    >
      <h3 className={s.drone_title}>{titles[activeIndex]}</h3>
      <p className={s.equipment}>(basic equipment)</p>
    </div>
  );
};

export default DroneTitle;
