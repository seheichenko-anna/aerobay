import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comprasion.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import { selectComprasionProducts } from '../../redux/comprasionProducts/comprasionProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

const Comprasion = () => {
  const comprasionProducts = useAppSelector(selectComprasionProducts);
  const { isBigScreenOrTablet } = useDashboard();

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <ul className={s.products_list}>
        {comprasionProducts.map(item => (
          <ProductCard item={item} />
        ))}
      </ul>
      {isBigScreenOrTablet && (
        <div className={s.comprasion_data_wrapper}>
          <div className={s.comprasion_data}>
            <h3 className={s.comprasion_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comprasion_data_list}>
              <li>3930 mAh</li>
              <li>5000 mAh</li>
              <li>3930 mAh</li>
              <li>3930 mAh</li>
            </ul>
          </div>
          <div className={s.comprasion_data}>
            <h3 className={s.comprasion_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comprasion_data_list}>
              <li>3930 mAh</li>
              <li>5000 mAh</li>
              <li>3930 mAh</li>
              <li>3930 mAh</li>
            </ul>
          </div>
          <div className={s.comprasion_data}>
            <h3 className={s.comprasion_data_title}>
              Remote control battery capacity
            </h3>
            <ul className={s.comprasion_data_list}>
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

export default Comprasion;
