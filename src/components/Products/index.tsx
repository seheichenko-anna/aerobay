import React, { useContext, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import 'react-tooltip/dist/react-tooltip.css';
import { mobileFilter } from '../../assets/catalog/index';
import { BaseProduct } from '../../redux/types';
import { Pagination } from './Pagination';
import ProductItem from './ProductItem';
import c from './Products.module.scss';
import { FilterProducts, ProductFilter } from './Sidebar';
import { SortDropdown } from './SortDropdown';
import { ProductFiltersContext } from '../../pages/Catalog/CategoryProducts';
import useFilters from '../../hooks/useFilters';
import { resetFilters, toggleOption } from '../../redux/filtersSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';

export const Products = ({ children }: { children: React.ReactNode[] }) => {
  const fromFragment =
    React.Children.toArray(children).find(
      (child): child is React.ReactElement =>
        React.isValidElement(child) && child.type === React.Fragment,
    )?.props.children || children;

  const header = React.Children.toArray(fromFragment).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === Products.Header,
  );

  const productList = React.Children.toArray(fromFragment).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === Products.ProductList,
  );

  const productFilters = React.Children.toArray(fromFragment).find(
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === Products.Filters,
  );

  const handlePageClick = () => {};

  return (
    <>
      {productFilters || <Products.Filters filters={[]} />}

      <main>
        {header}

        <div className={c.mobile_devider}></div>

        <MoreFiltersMobileBtn />

        <FilterTags />

        <div className={c['all-products-box']}>
          {productList}

          <Pagination handlePageClick={handlePageClick} pageCount={0} />
        </div>
      </main>
    </>
  );
};

const MoreFiltersMobileBtn = () => {
  const { setIsMobileFilterVisible } = useContext(ProductFiltersContext)!;

  const handleVisibleFilter = () => {
    setIsMobileFilterVisible(true);
  };

  return (
    <div className={c.mobile_filter}>
      <span>Filter:</span>

      <img
        src={mobileFilter}
        alt='mobile filter icon'
        onClick={handleVisibleFilter}
      />
    </div>
  );
};

const FilterTags = () => {
  const { currentFilterGroups } = useFilters();
  const isSomeFilterChecked = currentFilterGroups.some(group =>
    group.options.some(option => option.checked),
  );

  const { clearFilters, triggerForceUpdate } = useContext(ProductFiltersContext)!;
  const dispatch = useAppDispatch();
  const clearAll = () => {
    clearFilters();
    dispatch(resetFilters());
  };

  return (
    <div className={c.filtered_values_section}>
      {currentFilterGroups?.map((group, i) =>
        group.options.map(
          (option, j) =>
            option.checked && (
              <div key={`${i}-${j}`} className={c.filtered_value_box}>
                <p>{option.label}</p>

                <button
                  onClick={() => {
                    dispatch(toggleOption({ title: group.title, ...option }));
                    triggerForceUpdate()
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
        <button className={c.clear_all_filters} onClick={clearAll}>
          Clear All Filters
        </button>
      )}
    </div>
  );
};

Products.Filters = ({ filters }: { filters: ProductFilter[] }) => (
  <FilterProducts filters={filters} />
);

Products.Header = ({ title }: { title: string }) => {
  const [sortByFilter, setSortByFilter] = useState<string[]>(['Low To High']);

  return (
    <div className={c.title_and_sortBy_section}>
      <h2>{title}</h2>

      <div className={c.sort_by}>
        <p>Sort by:</p>

        <SortDropdown
          isSidebarDropdown={false}
          isOpen={false}
          selectedFilters={sortByFilter}
          setSelectedFilters={setSortByFilter}
        />
      </div>
    </div>
  );
};

Products.ProductList = ({
  products,
  loading,
}: {
  products: BaseProduct[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div className='flex justify-center'>
        <BounceLoader size={50} color='#a8a8a8' />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className='flex justify-center'>
        <p>No items found.</p>
      </div>
    );
  }

  return (
    <>
      <div className={c['all-products']}>
        {products.map(product => (
          <ProductItem key={product.id + product.title} product={product} />
        ))}
      </div>

      {/*  TODO: make show more work again! */}
      {/* <ButtonShowMore handleShowMore={handleShowMore} /> */}
    </>
  );
};
