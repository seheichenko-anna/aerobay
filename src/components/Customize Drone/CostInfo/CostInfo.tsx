import { Link } from 'react-router-dom';
import { useDashboard } from '../../../hooks/useDashboard';
import svg from '../../../assets/sprite.svg';
import s from './CostInfo.module.css';

interface CostInfoProps {
  activeIndex: number;
  links: string[];
  costs: number[];
}

const CostInfo: React.FC<CostInfoProps> = ({ activeIndex, links, costs }) => {
  const { isBigScreenOrTablet } = useDashboard();
  return (
    <div
      key={activeIndex}
      className={`${s.cost_info} ${isBigScreenOrTablet ? s.cost_info_bigscreen : ''}`}
    >
      <p className={s.total_cost}>Total cost:</p>
      <p className={s.cost_value_wrapper}>
        <span className={s.cost_value}>$ {costs[activeIndex]}</span>
      </p>
      <Link to={links[activeIndex]} className={s.link_base_model}>
        <span>Buy base model</span>
        <span className={s.arrow_wrapper}>
          <svg className={s.icon_arrow_link}>
            <use xlinkHref={`${svg}#icon-arrow-up-right`} />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default CostInfo;
