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
import { Controller } from 'swiper/modules';
import svg from '../../assets/sprite.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import ProductClearedModal from './ProductClearedModal/ProductClearedModal';
import { Drone } from '../../redux/drones/dronesOperations';
import { Accessory } from '../../redux/accessories/accessoriesOperations';
import 'swiper/css/controller';
import type { Swiper as SwiperInstance } from 'swiper';
import { keysAccessories, keysDrones } from './characteristicsComparisonValues';
import { IoIosArrowDown } from 'react-icons/io';
import DropDown from '../DropDown/Dropdown';

const Comparison = () => {
  const comparisonProducts = useAppSelector(selectComparisonProducts);
  const { isBigScreen, isAllMobile } = useDashboard();
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

    if (countA !== countB) return countB - countA;

    return typeA.localeCompare(typeB);
  });

  const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperInstance | null>(null);
  const [openDropdownCharacteristics, setOpenDropdownCharacteristics] =
    useState<boolean>(false);
  const [selectedCharacteristic, setSelectedCharacteristic] =
    useState<string>('all');

  const handleSelect = (value: string) => {
    setSelectedCharacteristic(value);
    setOpenDropdownCharacteristics(false);
  };

  const getCharacteristicDifference = (key: string): boolean => {
    const values = filteredProducts.map(product => {
      const subcategory = product.subcategories?.find(sub => sub.name === key);
      return subcategory ? subcategory.value : null;
    });

    const uniqueValues = [...new Set(values)];
    return uniqueValues.length > 1;
  };

  const renderSubcategory = (
    key: string,
    subcategory: any,
    subIndex: number
  ) => {
    if (selectedCharacteristic === 'all') {
      return (
        <div key={subIndex} className={s.subcategory_item}>
          <div className={s.subcategory_name}>{key}</div>
          <div className={s.subcategory_value}>
            {subcategory?.value || 'N/A'}
          </div>
        </div>
      );
    }

    if (
      selectedCharacteristic === 'difference' &&
      getCharacteristicDifference(key)
    ) {
      return (
        <div key={subIndex} className={s.subcategory_item}>
          <div className={s.subcategory_name}>{key}</div>
          <div className={s.subcategory_value}>
            {subcategory?.value || 'N/A'}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <div className={s.sort_comparison_products}>
        <div className={s.navItemWrapper}>
          <DropDown
            icon={
              <div
                aria-label="Sort by characteristics"
                className={
                  openDropdownCharacteristics ? s.navButtonActive : s.navButton
                }
              >
                <span>Company</span>{' '}
                <span
                  className={`${s.arrowDown} ${openDropdownCharacteristics ? s.active : ''}`}
                >
                  <IoIosArrowDown size={20} />
                </span>
              </div>
            }
            items={[
              { value: 'all', label: 'All characteristics' },
              { value: 'difference', label: 'Only difference' },
            ]}
            onSelect={handleSelect}
            size="191px"
          />
        </div>
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
          spaceBetween={0}
          slidesPerView={isBigScreen ? 4.5 : isAllMobile ? 2.1 : 3.5}
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className={`${s.comparison_swiper_first} ${s.comparison_swiper}`}
        >
          {filteredProducts.map((item, index) => (
            <SwiperSlide key={`product-${index}`} className={s.slide}>
              <div className={s.product_card}>
                <ProductCard
                  item={item}
                  onDelete={() => handleDeleteProduct(item)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={isBigScreen ? 4.5 : isAllMobile ? 2.1 : 3.5}
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className={`${s.comparison_swiper_second} ${s.comparison_swiper}`}
        >
          {filteredProducts.map((item, index) => {
            const type = 'type' in item && item.type ? item.type : 'Drone';
            const keys = type === 'Drone' ? keysDrones : keysAccessories;

            return (
              <SwiperSlide key={`subcategory-${index}`} className={s.slide}>
                <div className={s.subcategory_list}>
                  {keys.map((key, subIndex) => {
                    const subcategory = item.subcategories?.find(
                      sub => sub.name === key
                    );
                    return renderSubcategory(key, subcategory, subIndex);
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {comparisonProducts.length <= 0 && (
        <Modal closeModal={toggle} icon={false}>
          <ProductClearedModal closeModal={toggle} />
        </Modal>
      )}
    </>
  );
};

export default Comparison;
