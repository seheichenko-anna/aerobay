import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comparison.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import { selectComparisonProducts } from '../../redux/comparisonProducts/comparisonProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Swiper, SwiperSlide } from 'swiper/react';

const Comparison = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts);
  const { isBigScreenOrTablet, isBigScreen, isAllMobile } = useDashboard();

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <div className={s.products_list}>
        <Swiper
          spaceBetween={32}
          slidesPerView={isBigScreen ? 4.5 : isAllMobile ? 2.1 : 3.5}
          className={s.comparison_swiper}
        >
          {comparisonProducts.map((item, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
