<<<<<<< HEAD
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import c from './FilterProduct.module.scss';
import classNames from 'classnames';
import { Dropdown2 } from '../Dropdown2';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/Catalog';
import rangeStat from '../../../assets/catalog/sidebar/price_range_stat.svg';
import { IoIosClose } from 'react-icons/io';

export const FilterProducts = () => {
  const test2 = useRef<HTMLInputElement>(null);

  const minPrice = 8000;
  const [maxPrice, setMaxPrice] = useState({
    isTrigged: false,
    price: 200000,
    value: 100,
  });
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

  const minPricewithDot = `${String(minPrice).slice(0, -3)}.${String(minPrice).slice(-3)}`;
  const maxPricewithDot = !maxPrice?.isTrigged
    ? `${String(maxPrice?.price - 20000).slice(0, -3)}.${String(maxPrice?.price - 20000).slice(-3)}`
    : `${String(maxPrice?.price).slice(0, -3)}.${String(maxPrice?.price).slice(-3)}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice({ isTrigged: true, price: +`${+value * 2}000`, value: +value });
  };
  const handleCheckboxA1 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAvailabilityChecked({
      ...isAvailabilityChecked,
      'In stock': e.target.checked,
    });
  };
  const handleCheckboxA2 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAvailabilityChecked({
      ...isAvailabilityChecked,
      'Not available': e.target.checked,
    });
  };
  const handleCheckboxB1 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTypeChecked({
      ...isTypeChecked,
      'Model Drone': e.target.checked,
    });
  };
  const handleCheckboxB2 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTypeChecked({
      ...isTypeChecked,
      'Ready-Solution Drone': e.target.checked,
    });
  };
  const handleClear = () => {
    setSelectedCategories([]);
    setMaxPrice({ isTrigged: true, price: 200000, value: 100 });
    setIsAvailabilityChecked({ 'In stock': false, 'Not available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  useEffect(() => {
    (function () {
      function setProgress(elTarget: HTMLInputElement) {
        let elRangeBar = elTarget.parentElement as HTMLInputElement;
        let intThumbWidth = elRangeBar.clientHeight * 3;
        let intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
        let intThumbWidthOffset = intThumbWidth / 2;

        let intProgressPosition =
          (+elTarget.value - +elTarget.min) / (+elTarget.max - +elTarget.min);
        let intRangePosition =
          intRangeBarWidth * intProgressPosition + intThumbWidthOffset;

        elRangeBar.style.background =
          'linear-gradient(to right, #101828 ' +
          intRangePosition +
          'px, #E4E6EA ' +
          intRangePosition +
          'px';
      }
      if (test2.current) {
        test2.current.addEventListener('input', function () {
          setProgress(this);
        });
      }

      setProgress(test2.current as HTMLInputElement);
    })();
  }, [maxPrice]);

  const handleCloseSidebar = () => {
    setIsMobileFilterVisible(false);
    document.body.style.overflow = '';
  };

  return (
    <aside
      className={classNames(c.filter_product, {
        [c.filter_product_active]: isMobileFilterVisible,
      })}
    >
      {isMobileFilterVisible && <div className={c.overlay}></div>}

      <div className={c.filter_product__wrap}>
        {isMobileFilterVisible && (
          <div className={c.close_sidebar} onClick={handleCloseSidebar}>
            <div>
              <IoIosClose size="30px" />
            </div>
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
          <div className={c.price_range}>
            <h3>Price range</h3>
            <div className={c.price_range__bgImage}>
              <img src={rangeStat} alt="range background image" />
              <div className={c.range}>
                <input
                  type="range"
                  min={4}
                  max={100}
                  value={
                    !maxPrice?.isTrigged
                      ? maxPrice?.value - 10
                      : maxPrice?.value
                  }
                  onChange={handleChange}
                  step={1}
                  ref={test2}
                />
              </div>
            </div>
            <div className={c.price_range__minMaxPrices}>
              <p>$ {minPricewithDot}</p>
              <p>$ {maxPricewithDot}</p>
            </div>
          </div>
          <div className={c.availability}>
            <h3>Availability</h3>
            <div className={c.availability__checkboks}>
              <div>
                <input
                  type="checkbox"
                  id="in_stock"
                  checked={isAvailabilityChecked?.['In stock']}
                  onChange={handleCheckboxA1}
                />
                <label htmlFor="in_stock">In Stock</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="not_available"
                  checked={isAvailabilityChecked?.['Not available']}
                  onChange={handleCheckboxA2}
                />
                <label htmlFor="not_available">Not Available</label>
              </div>
            </div>
          </div>{' '}
          <div className={c.type}>
            <h3>Type</h3>
            <div className={c.type__checkboks}>
              <div>
                <input
                  type="checkbox"
                  id="model_drone"
                  checked={isTypeChecked?.['Model Drone']}
                  onChange={handleCheckboxB1}
                />
                <label htmlFor="model_drone">Model Drone</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ready_solution_drone"
                  checked={isTypeChecked?.['Ready-Solution Drone']}
                  onChange={handleCheckboxB2}
                />
                <label htmlFor="ready_solution_drone">
                  Ready-Solution Drone
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={c.buttons}>
          <button className={c.buttons__apply}>Apply</button>
          <button className={c.buttons__clear} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </aside>
  );
};
=======
import {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import c from './FilterProduct.module.scss';
import { Dropdown2 } from '../Dropdown2';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/Catalog';
import rangeStat from '../../../assets/catalog/sidebar/price_range_stat.svg';

export const FilterProducts: FC = () => {
  const test2 = useRef<HTMLInputElement>(null);

  const minPrice = 8000;
  const [maxPrice, setMaxPrice] = useState({
    isTrigged: false,
    price: 200000,
    value: 100,
  });
  const {
    selectedCategories,
    setSelectedCategories,
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    isTypeChecked,
    setIsTypeChecked,
  } = useContext(CatalogContext) as TCatalogContext;

  const minPricewithDot = `${String(minPrice).slice(0, -3)}.${String(minPrice).slice(-3)}`;
  const maxPricewithDot = !maxPrice?.isTrigged
    ? `${String(maxPrice?.price - 20000).slice(0, -3)}.${String(maxPrice?.price - 20000).slice(-3)}`
    : `${String(maxPrice?.price).slice(0, -3)}.${String(maxPrice?.price).slice(-3)}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice({ isTrigged: true, price: +`${+value * 2}000`, value: +value });
  };
  const handleCheckboxA1 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAvailabilityChecked({
      ...isAvailabilityChecked,
      'In stock': e.target.checked,
    });
  };
  const handleCheckboxA2 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAvailabilityChecked({
      ...isAvailabilityChecked,
      'Not available': e.target.checked,
    });
  };
  const handleCheckboxB1 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTypeChecked({
      ...isTypeChecked,
      'Model Drone': e.target.checked,
    });
  };
  const handleCheckboxB2 = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTypeChecked({
      ...isTypeChecked,
      'Ready-Solution Drone': e.target.checked,
    });
  };
  const handleClear = () => {
    setSelectedCategories([]);
    setMaxPrice({ isTrigged: true, price: 200000, value: 100 });
    setIsAvailabilityChecked({ 'In stock': false, 'Not available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  useEffect(() => {
    (function () {
      function setProgress(elTarget: HTMLInputElement) {
        let elRangeBar = elTarget.parentElement as HTMLInputElement;
        let intThumbWidth = elRangeBar.clientHeight * 3;
        let intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
        let intThumbWidthOffset = intThumbWidth / 2;

        let intProgressPosition =
          (+elTarget.value - +elTarget.min) / (+elTarget.max - +elTarget.min);
        let intRangePosition =
          intRangeBarWidth * intProgressPosition + intThumbWidthOffset;

        elRangeBar.style.background =
          'linear-gradient(to right, #101828 ' +
          intRangePosition +
          'px, #E4E6EA ' +
          intRangePosition +
          'px';
      }
      if (test2.current) {
        test2.current.addEventListener('input', function () {
          setProgress(this);
        });
      }

      setProgress(test2.current as HTMLInputElement);
    })();
  }, [maxPrice]);

  return (
    <aside className={c.filter_product}>
      <div className={c.filter_product__wrap}>
        <h2>Filter Product</h2>
        <div className={c.filters}>
          <Dropdown2
            isSidebarDropdown={true}
            isOpen={true}
            selectedFilters={selectedCategories}
            setSelectedFilters={setSelectedCategories}
          />
          <div className={c.price_range}>
            <h3>Price range</h3>
            <div className={c.price_range__bgImage}>
              <img src={rangeStat} alt="range background image" />
              <div className={c.range}>
                <input
                  type="range"
                  min={4}
                  max={100}
                  value={
                    !maxPrice?.isTrigged
                      ? maxPrice?.value - 10
                      : maxPrice?.value
                  }
                  onChange={handleChange}
                  step={1}
                  ref={test2}
                />
              </div>
            </div>
            <div className={c.price_range__minMaxPrices}>
              <p>$ {minPricewithDot}</p>
              <p>$ {maxPricewithDot}</p>
            </div>
          </div>
          <div className={c.availability}>
            <h3>Availability</h3>
            <div className={c.availability__checkboks}>
              <div>
                <input
                  type="checkbox"
                  id="in_stock"
                  checked={isAvailabilityChecked?.['In stock']}
                  onChange={handleCheckboxA1}
                />
                <label htmlFor="in_stock">In Stock</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="not_available"
                  checked={isAvailabilityChecked?.['Not available']}
                  onChange={handleCheckboxA2}
                />
                <label htmlFor="not_available">Not Available</label>
              </div>
            </div>
          </div>{' '}
          <div className={c.type}>
            <h3>Type</h3>
            <div className={c.type__checkboks}>
              <div>
                <input
                  type="checkbox"
                  id="model_drone"
                  checked={isTypeChecked?.['Model Drone']}
                  onChange={handleCheckboxB1}
                />
                <label htmlFor="model_drone">Model Drone</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="ready_solution_drone"
                  checked={isTypeChecked?.['Ready-Solution Drone']}
                  onChange={handleCheckboxB2}
                />
                <label htmlFor="ready_solution_drone">
                  Ready-Solution Drone
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={c.buttons}>
          <button className={c.buttons__apply}>Apply</button>
          <button className={c.buttons__clear} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </aside>
  );
};
>>>>>>> 07e05e0aaf6f06be0e9e5653bc18e3c8df61f090
