import React, { useContext } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { mobileFilter } from '../../assets/catalog/index';
import { ProductFiltersContext } from '../../pages/Catalog/CategoryProducts';
import FilterTags from './FilterTags';
import Header from './Header';
import ProductList from './ProductList';
import c from './Products.module.scss';
import { FilterProducts } from './Sidebar';

const Products = ({ children }: { children: React.ReactNode[] }) => {
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

  return (
    <>
      {productFilters || <Products.Filters filters={[]} />}

      <main>
        {header}

        <div className={c.mobile_devider}></div>

        <MoreFiltersMobileBtn />

        <FilterTags />

        <div className={c['all-products-box']}>{productList}</div>
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

Products.Filters = FilterProducts;
Products.Header = Header;
Products.ProductList = ProductList;

export default Products;
