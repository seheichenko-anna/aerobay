import { FC, useContext, useState } from 'react';
import c from './AllProducts.module.scss';
import { Dropdown2 } from '../Dropdown2';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/Catalog';

export const AllProducts: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'Low To High',
  ]);

  const {
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    isTypeChecked,
    setIsTypeChecked,
  } = useContext(CatalogContext) as TCatalogContext;

  const filteredValues = Object.entries({
    ...isTypeChecked,
    ...isAvailabilityChecked,
  })
    .filter(([_, value]) => value === true)
    .map(([key, value]) => ({ [key]: value }));

  const handleClear = () => {
    setIsAvailabilityChecked({ 'In stock': false, 'Not available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };
  const handleRemove = (value: string[]) => () => {
    const valStr = String(value);
    if (isTypeChecked.hasOwnProperty(valStr)) {
      setIsTypeChecked({ ...isTypeChecked, [valStr]: false });
    }
    if (isAvailabilityChecked.hasOwnProperty(valStr)) {
      setIsAvailabilityChecked({ ...isAvailabilityChecked, [valStr]: false });
    }
  };

  return (
    <main>
      <div className={c.title_and_sortBy_section}>
        <h2>All Products</h2>
        <div className={c.sort_by}>
          <p>Sort by:</p>
          <Dropdown2
            isSidebarDropdown={false}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
      </div>
      <div className={c.filtered_values_section}>
        {filteredValues?.map(value => (
          <div className={c.filtered_value_box}>
            <p>{Object.keys(value)}</p>
            <button onClick={handleRemove(Object.keys(value))}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11M1 1L11 11"
                  stroke="#101828"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
        {filteredValues.length >= 1 && (
          <button className={c.clear_all_filters} onClick={handleClear}>
            Clear All Filters
          </button>
        )}
      </div>
      <article></article>
    </main>
  );
};
