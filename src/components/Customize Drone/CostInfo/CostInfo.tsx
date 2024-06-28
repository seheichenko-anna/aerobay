import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useDashboard } from '../../../hooks/useDashboard';
import svg from '../../../assets/sprite.svg';
import s from './CostInfo.module.css';

interface CostInfoProps {
  activeIndex: number;
  links: string[];
  costs: number[];
}

const AnimatedCostValue: React.FC<{ cost: number }> = ({ cost }) => {
  const costSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  });

  return (
    <animated.span style={costSpring} className={s.cost_value}>
      $ {cost}
    </animated.span>
  );
};

const CostInfo: React.FC<CostInfoProps> = ({ activeIndex, links, costs }) => {
  const { isBigScreenOrTablet } = useDashboard();
  return (
    <div
      key={activeIndex}
      className={`${s.cost_info} ${isBigScreenOrTablet ? s.cost_info_bigscreen : ''}`}
    >
      <p className={s.total_cost}>Total cost:</p>
      <p className={s.cost_value_wrapper}>
        <AnimatedCostValue cost={costs[activeIndex]} />
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
