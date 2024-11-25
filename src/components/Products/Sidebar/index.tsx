import classNames from 'classnames';
import { useContext, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';

import { ActionButtons } from './ActionButtons';
import { CheckboxGroup } from './CheckboxGroup';
import c from './FilterProduct.module.scss';
import { PriceRange } from './PriceRange';

import { BounceLoader } from 'react-spinners';
import useSelectFilters from '../../../hooks/useSelectFilters';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/providers/CatalogProvider';
import { CategoryTabType } from '../../Categories/categoryTabs';
import { CategoryFilterDropdown } from '../CategoryFilterDropdown';
import { ProductFiltersContext } from '../../../pages/Catalog/CategoryProducts';

export type ProductFilterOption = { label: string; checked: boolean };
export type ProductFilter = {
  category: CategoryTabType;
  title: string;
  options: ProductFilterOption[];
};

export const FilterProducts = ({ filters }: { filters: ProductFilter[] }) => {
  const refInput = useRef<HTMLInputElement>(null);

  const { selectedCategories, setSelectedCategories, selectedCategory } =
    useContext(CatalogContext) as TCatalogContext;

  const { isMobileFilterVisible, setIsMobileFilterVisible } = useContext(
    ProductFiltersContext,
  )!;

  const handleChangePrice = () => {};

  const handleCloseSidebar = () => {
    setIsMobileFilterVisible(false);
  };

  if (isMobileFilterVisible) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const WithDefaultFilters = () => {
    const { loading } = useSelectFilters();

    const BackendFilters = () => {
      if (loading) {
        return <BounceLoader size={40} color='#a8a8a8' className='m-auto' />;
      }

      return filters.map(group => (
        <CheckboxGroup key={group.title} group={group} filters={filters} />
      ));
    };

    return (
      <div className={c.filters}>
        {selectedCategory === 'All Products' && (
          <CategoryFilterDropdown
            isSidebarDropdown={true}
            isOpen={true}
            selectedFilters={selectedCategories}
            setSelectedFilters={setSelectedCategories}
          />
        )}

        <PriceRange onChange={handleChangePrice} ref={refInput} />

        <BackendFilters />
      </div>
    );
  };

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
            <IoIosClose size='30px' />
          </div>
        )}

        <h2>Filter Product</h2>

        <WithDefaultFilters />

        <ActionButtons />
      </div>
    </aside>
  );
};
