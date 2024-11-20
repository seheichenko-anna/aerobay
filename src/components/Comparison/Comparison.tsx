import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comparison.module.css';
import { useDashboard } from '../../hooks/useDashboard';
import {
  clearAllProducts,
  deleteComparisonProduct,
  deleteProductsByType,
  selectComparisonProducts,
} from '../../redux/comparisonProducts/comparisonProductsSlice';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Swiper, SwiperSlide } from 'swiper/react';
import svg from '../../assets/sprite.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import ProductClearedModal from './ProductClearedModal/ProductClearedModal';
import { Drone } from '../../redux/drones/dronesOperations';
import { Accessory } from '../../redux/accessories/accessoriesOperations';

const Comparison = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts);
  const { isBigScreenOrTablet, isBigScreen, isAllMobile } = useDashboard();
  const dispatch = useAppDispatch();
  const { toggle } = useModal();

  const typeCounts = comparisonProducts.reduce(
    (acc, product) => {
      const type = 'type' in product && product.type ? product.type : 'Drone';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const availableTypes = Object.keys(typeCounts);

  const [selectedType, setSelectedType] = useState<string>(
    availableTypes[0] || 'Drone'
  );

  const handleDeleteType = (type: string) => {
    dispatch(deleteProductsByType(type));
    const newAvailableTypes = availableTypes.filter(t => t !== type);
    setSelectedType(newAvailableTypes[0] || 'Drone');
  };

  const handleClearAll = () => {
    dispatch(clearAllProducts());
  };

  const filteredProducts = comparisonProducts.filter(product => {
    if ('type' in product) {
      return product.type === selectedType;
    }
    return selectedType === 'Drone';
  });

  const handleDeleteProduct = (item: Partial<Drone> | Partial<Accessory>) => {
    dispatch(deleteComparisonProduct(item));
    const remainingProducts = comparisonProducts.filter(
      product =>
        product !== item &&
        ('type' in product
          ? product.type === selectedType
          : selectedType === 'Drone')
    );

    if (remainingProducts.length === 0) {
      const newAvailableTypes = availableTypes.filter(
        type => type !== selectedType
      );
      setSelectedType(newAvailableTypes[0] || 'Drone');
    }
  };

  const sortedTypeCounts = Object.entries(typeCounts).sort((a, b) => {
    const [typeA, countA] = a;
    const [typeB, countB] = b;

    if (typeA < typeB) return -1;
    if (typeA > typeB) return 1;

    return countB - countA;
  });

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <div className={s.sort_comparison_products}>
        <form className={s.products_form_types}>
          {sortedTypeCounts.map(([type, count]) => (
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
          <button
            className={s.clear_all_btn}
            type="button"
            onClick={handleClearAll}
          >
            <span>Clear All</span>
            <span className={s.clear_all_icon}>
              <svg
                className={s.delete}
                aria-label="delete icon"
                width="18"
                height="20"
              >
                <use xlinkHref={`${svg}#icon-x`} />
              </svg>
            </span>
          </button>
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
              <ProductCard
                item={item}
                onDelete={() => handleDeleteProduct(item)}
              />
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
      {comparisonProducts.length <= 0 && (
        <Modal closeModal={toggle} icon={false}>
          <ProductClearedModal closeModal={toggle} />
        </Modal>
      )}
    </>
  );
};

export default Comparison;
