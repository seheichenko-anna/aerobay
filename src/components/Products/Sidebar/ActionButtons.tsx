import { useContext } from 'react';
import c from './FilterProduct.module.scss';
import { ProductFiltersContext } from '../../../pages/Catalog/ProductsWrap';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { resetFilters } from '../../../redux/filtersSlice';

export const ActionButtons = () => {
  const { triggerApply } = useContext(ProductFiltersContext)!;

  const dispatch = useAppDispatch();
  const onClear = () => {
    dispatch(resetFilters());
    triggerApply();
  };

  return (
    <div className={c.buttons}>
      <button className={c.buttons__apply} onClick={triggerApply}>
        Apply
      </button>

      <button className={c.buttons__clear} onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
