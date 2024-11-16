import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comparison.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import { selectComparisonProducts } from '../../redux/comparisonProducts/comparisonProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Swiper, SwiperSlide } from 'swiper/react';
import svg from '../../assets/sprite.svg';
import { useState } from 'react';

const Comparison = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts);
  const { isBigScreenOrTablet, isBigScreen, isAllMobile } = useDashboard();

  const typeCounts = comparisonProducts.reduce(
    (acc, product) => {
      const type = 'type' in product && product.type ? product.type : 'Drone';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const [selectedType, setSelectedType] = useState<string>(
    Object.keys(typeCounts)[0] || 'Drone'
  );

  const handleDeleteType = (type: string) => {
    console.log(`Видалити всі продукти типу: ${type}`);
  };

  const filteredProducts = comparisonProducts.filter(product => {
    if ('type' in product) {
      return product.type === selectedType;
    }
    return selectedType === 'Drone';
  });

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <div className={s.sort_comparison_products}>
        <form className={s.products_form_types}>
          {Object.entries(typeCounts).map(([type, count]) => (
            <label key={type} className={s.product_label}>
              <input
                type="radio"
                name="productType"
                value={type}
                className={s.product_radio}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
              <span className={s.product_info}>
                {type} {count}
                <button
                  type="button"
                  onClick={() => handleDeleteType(type)}
                  className={s.delete_btn}
                >
                  <svg
                    className={s.delete}
                    aria-label="delete icon"
                    width="18"
                    height="20"
                  >
                    <use xlinkHref={`${svg}#icon-x`} />
                  </svg>
                </button>
              </span>
            </label>
          ))}
        </form>
      </div>
      <div className={s.products_list}>
        <Swiper
          spaceBetween={32}
          slidesPerView={isBigScreen ? 4.5 : isAllMobile ? 2.1 : 3.5}
          className={s.comparison_swiper}
        >
          {filteredProducts.map((item, index) => (
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
