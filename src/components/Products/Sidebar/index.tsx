import classNames from 'classnames';
import { ChangeEvent, useContext, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';

import { ActionButtons } from './ActionButtons';
import { CheckboxGroup } from './CheckboxGroup';
import c from './FilterProduct.module.scss';
import { PriceRange } from './PriceRange';

import { BounceLoader } from 'react-spinners';
import useFilters from '../../../hooks/useFilters';
import {
    CatalogContext,
    TCatalogContext,
} from '../../../pages/Catalog/providers/CatalogProvider';
import { CategoryTabType } from '../../Categories/categoryTabs';
import { CategoryFilterDropdown } from '../CategoryFilterDropdown';

export type ProductFilterOption = { label: string; checked: boolean };
export type ProductFilter = {
  category: CategoryTabType;
  title: string;
  options: ProductFilterOption[];
};

export const FilterProducts = ({ filters }: { filters: ProductFilter[] }) => {
  const refInput = useRef<HTMLInputElement>(null);

  // const {minPrice, maxPrice} = useContext(ProductFiltersContext)!;
  // const initialMaxPrice = { isTrigged: false, price: 200000, value: 100 };
  // const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const {
    selectedCategories,
    setSelectedCategories,

    isMobileFilterVisible,
    setIsMobileFilterVisible,

    selectedCategory,
  } = useContext(CatalogContext) as TCatalogContext;

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    // const value = +e.target.value;

    // setMaxPrice({
    //   isTrigged: true,
    //   price: value * 2000,
    //   value,
    // });
  };

  // TODO: apply reseting for price range and selected categories
  // const handleClear = () => {
  //   setSelectedCategories([]);
  //   setMaxPrice(initialMaxPrice);
  // };

  const handleCloseSidebar = () => {
    setIsMobileFilterVisible(false);
    document.body.style.overflow = '';
  };

  const WithDefaultFilters = () => {
    const { loading } = useFilters();

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

        <PriceRange
          onChange={handleChangePrice}
          ref={refInput}
        />

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
