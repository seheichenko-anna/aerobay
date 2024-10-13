import classNames from 'classnames';
import { ChangeEvent, useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/Catalog';
import { Dropdown2 } from '../Dropdown2';
import { ActionButtons } from './ActionButtons';
import { CheckboxGroup } from './CheckboxGroup';
import c from './FilterProduct.module.scss';
import { PriceRange } from './PriceRange';

import { getAvailabilityOptions } from './filterOptions/availabilityOptions';
import { getTypeOptions } from './filterOptions/typeOptions';

export const FilterProducts = () => {
  const test2 = useRef<HTMLInputElement>(null);

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
    setIsAvailabilityChecked({ 'In stock': false, 'Not available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  const handleCloseSidebar = () => {
    setIsMobileFilterVisible(false);
    document.body.style.overflow = '';
  };

  const handleCheckboxChange = <T,>(
    checked: boolean,
    label: string,
    setter: React.Dispatch<React.SetStateAction<T>>,
    state: T,
  ) => {
    setter({ ...state, [label]: checked });
  };

  const availabilityOptions = getAvailabilityOptions(
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    handleCheckboxChange,
  );

  const typeOptions = getTypeOptions(
    isTypeChecked,
    setIsTypeChecked,
    handleCheckboxChange,
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

        <div className={c.filters}>
          <Dropdown2
            isSidebarDropdown={true}
            isOpen={true}
            selectedFilters={selectedCategories}
            setSelectedFilters={setSelectedCategories}
          />

          <PriceRange
            minPrice={minPrice}
            maxPrice={maxPrice}
            onChange={handleChangePrice}
            refInput={test2}
          />

          <CheckboxGroup title="Availability" options={availabilityOptions} />

          <CheckboxGroup title="Type" options={typeOptions} />
        </div>

        <ActionButtons onClear={handleClear} />
      </div>
    </aside>
  );
};
