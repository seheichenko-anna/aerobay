import classNames from 'classnames';
import { ChangeEvent, useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import { Dropdown2 } from '../Dropdown2';
import { ActionButtons } from './ActionButtons';
import { CheckboxGroup } from './CheckboxGroup';
import c from './FilterProduct.module.scss';
import { PriceRange } from './PriceRange';

import { getCheckboxOptions } from './filterOptions/getCheckboxOptions';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/CatalogProvider';

export const FilterProducts = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const refInput = useRef<HTMLInputElement>(null);

  const minPrice = 8000;
  const initialMaxPrice = { isTrigged: false, price: 200000, value: 100 };
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const {
    selectedCategories,
    setSelectedCategories,

    isAvailabilityChecked,
    setIsAvailabilityChecked,

    isTypeChecked,
    setIsTypeChecked,

    isMobileFilterVisible,
    setIsMobileFilterVisible,

    selectedCategory,
  } = useContext(CatalogContext) as TCatalogContext;

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setMaxPrice({
      isTrigged: true,
      price: value * 2000,
      value,
    });
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setMaxPrice(initialMaxPrice);
    setIsAvailabilityChecked({ 'In Stock': false, 'Not Available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  const handleCloseSidebar = () => {
    setIsMobileFilterVisible(false);
    document.body.style.overflow = '';
  };

  const availabilityOptions = getCheckboxOptions(
    isAvailabilityChecked,
    setIsAvailabilityChecked,
  );

  const typeOptions = getCheckboxOptions(isTypeChecked, setIsTypeChecked);

  const WithDefaultFilters = ({
    children,
  }: {
    children?: React.ReactNode;
  }) => (
    <div className={c.filters}>
      {selectedCategory === 'All Products' && (
        <Dropdown2
          isSidebarDropdown={true}
          isOpen={true}
          selectedFilters={selectedCategories}
          setSelectedFilters={setSelectedCategories}
        />
      )}

      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={handleChangePrice}
        ref={refInput}
      />

      <CheckboxGroup title="Availability" options={availabilityOptions} />

      {/* dummy filter for all and Drones, just ignore Accessories */}
      {selectedCategory !== 'Accessories' ? (
        <CheckboxGroup title="Type" options={typeOptions} />
      ) : (
        <></>
      )}

      {children && <>{children}</>}
    </div>
  );

  return (
    <aside
      className={classNames(c.filter_product, {
        [c.filter_product_active]: isMobileFilterVisible,
      })}
    >
      {isMobileFilterVisible && <div className={c.overlay} />}

      <div className={c.filter_product__wrap}>
        {isMobileFilterVisible && (
          <div className={c.close_sidebar} onClick={handleCloseSidebar}>
            <IoIosClose size="30px" />
          </div>
        )}

        <h2>Filter Product</h2>

        <WithDefaultFilters children={children} />

        <ActionButtons onClear={handleClear} />
      </div>
    </aside>
  );
};
