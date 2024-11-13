import { useContext, useReducer } from 'react';
import useFilters from '../../hooks/useFilters';
import { ProductFiltersContext } from '../../pages/Catalog/CategoryProducts';
import { resetFilters, toggleOption } from '../../redux/filtersSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import styles from './Products.module.scss';

const FilterTags = () => {
  const { currentFilterGroups } = useFilters();
  const isSomeFilterChecked = currentFilterGroups.some(group =>
    group.options.some(option => option.checked),
  );

  const { clearFilters, applyFilters } = useContext(ProductFiltersContext)!;
  const dispatch = useAppDispatch();
  const clearAll = () => {
    clearFilters();
    dispatch(resetFilters());
  };

  const [, triggerApplyFiltersAfterDispatch] = useReducer(() => {
    applyFilters();
  }, undefined);

  return (
    <div className={styles.filtered_values_section}>
      {currentFilterGroups?.map((group, i) =>
        group.options.map(
          (option, j) =>
            option.checked && (
              <div key={`${i}-${j}`} className={styles.filtered_value_box}>
                <p>{option.label}</p>

                <button
                  onClick={() => {
                    dispatch(toggleOption({ title: group.title, ...option }));

                    // using just applyFilters doesn't update view.
                    triggerApplyFiltersAfterDispatch();
                  }}
                >
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11 1L1 11M1 1L11 11'
                      stroke='#101828'
                      strokeWidth='1.67'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            ),
        ),
      )}

      {isSomeFilterChecked && (
        <button className={styles.clear_all_filters} onClick={clearAll}>
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default FilterTags;
