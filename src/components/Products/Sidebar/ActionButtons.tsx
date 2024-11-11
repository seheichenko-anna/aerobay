import c from './FilterProduct.module.scss';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { resetFilters } from '../../../redux/filtersSlice';
import { useContext } from 'react';
import { ProductFiltersContext } from '../../../pages/Catalog/CategoryProducts';

export const ActionButtons = () => {
  const { applyFilters, clearFilters } = useContext(ProductFiltersContext)!;

  const dispatch = useAppDispatch();
  const onClear = () => {
    clearFilters()
    dispatch(resetFilters());
  };

  return (
    <div className={c.buttons}>
      <button className={c.buttons__apply} onClick={applyFilters}>
        Apply
      </button>

      <button className={c.buttons__clear} onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
