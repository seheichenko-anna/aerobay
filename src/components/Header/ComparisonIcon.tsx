import s from './ComparisonIcon.module.css';
import svg from '../../assets/sprite.svg';
import { selectComparisonProducts } from '../../redux/comparisonProducts/comparisonProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

const ComparisonIcon = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts).length;

  return (
    <div className={s.icon_wrapper}>
      {' '}
      <svg className={s.icon_comparison}>
        <use xlinkHref={`${svg}#icon-comparison`} />
      </svg>
      {comparisonProducts > 0 && (
        <div className={s.comparison_quantity}>
          <p>{comparisonProducts}</p>
        </div>
      )}
    </div>
  );
};

export default ComparisonIcon;
