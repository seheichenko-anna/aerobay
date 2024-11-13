import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comparison.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import { selectComparisonProducts } from '../../redux/comparisonProducts/comparisonProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

const Comparison = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts);
  const { isBigScreenOrTablet } = useDashboard();

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <ul className={s.products_list}>
        {comparisonProducts.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </ul>
      {isBigScreenOrTablet && (
        <div className={s.comparison_data_wrapper}>
          <div className={s.comparison_data}>
            <h3 className={s.comparison_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comparison_data_list}>
              <li>3930 mAh</li>
              <li>5000 mAh</li>
              <li>3930 mAh</li>
              <li>3930 mAh</li>
            </ul>
          </div>
          <div className={s.comparison_data}>
            <h3 className={s.comparison_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comparison_data_list}>
              <li>3930 mAh</li>
              <li>5000 mAh</li>
              <li>3930 mAh</li>
              <li>3930 mAh</li>
            </ul>
          </div>
          <div className={s.comparison_data}>
            <h3 className={s.comparison_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comparison_data_list}>
              <li>3930 mAh</li>
              <li>5000 mAh</li>
              <li>3930 mAh</li>
              <li>3930 mAh</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Comparison;
