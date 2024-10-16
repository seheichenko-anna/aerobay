import React, { useContext, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import 'react-tooltip/dist/react-tooltip.css';
import { mobileFilter } from '../../assets/catalog/index';
import {
  CatalogContext,
  TCatalogContext,
} from '../../pages/Catalog/CatalogProvider';
import { BaseProduct } from '../../redux/types';
import { ButtonShowMore } from './ButtonShowMore';
import { Dropdown2 } from './Dropdown2';
import { Pagination } from './Pagination';
import ProductItem from './ProductItem';
import c from './Products.module.scss';
import { FilterProducts } from './Sidebar';

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

  // let totalProductsCount = Array.from({ length: 41 }, (_, index) =>
  //   allProducts?.map(product => ({
  //     ...product,
  //     id: index * allProducts?.length + product?.id,
  //   })),
  // ).flat();

  // Filter the total products if there are selected categories
  // if (selectedCategories?.length) {
  //   totalProductsCount = totalProductsCount.filter(el => {
  //     return selectedCategories.some(category => category === el.category);
  //   });
  // }

  // const allProductsX80Length = totalProductsCount?.length;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [visibleProductsCount, setVisibleProductsCount] = useState(9);
  //
  // const [isShowed, setIsShowed] = useState(true);
  //
  // const er = allProductsX80Length / visibleProductsCount;
  // const [ww, setWW] = useState(
  //   Array(Math.ceil(er))
  //     .fill(0)
  //     .map((_, i) => {
  //       if (i + 1 === Math.ceil(er)) {
  //         const a1 = Math.ceil(er) - 1;
  //         const a2 = allProductsX80Length - a1 * 9;
  //         return { [i + 1]: a2 };
  //       }
  //       return { [i + 1]: 9 };
  //     }),
  // );

  // useEffect(() => {
  //   setWW(
  //     Array(Math.ceil(er))
  //       .fill(0)
  //       .map((_, i) => {
  //         if (i + 1 === Math.ceil(er)) {
  //           const a1 = Math.ceil(er) - 1;
  //           const a2 = allProductsX80Length - a1 * 9;
  //           return { [i + 1]: a2 };
  //         }
  //         return { [i + 1]: 9 };
  //       }),
  //   );
  // }, [totalProductsCount?.length]);

  // const [currentProduct, setCurrentProduct] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   const productElements = document.querySelectorAll('.product article');
  //   const lastProductElement = productElements[productElements.length - 1];
  //   const lastProductDataId =
  //     lastProductElement?.getAttribute('data-id') ?? '0'; // Fallback to '0' if null
  //
  //   const totalProductsLength = totalProductsCount.length; // Assuming it's an array
  //   const isAllProductsLoaded =
  //     productElements.length > 0 && +lastProductDataId === totalProductsLength;
  //
  //   setIsShowed(!isAllProductsLoaded);
  // }, [totalProductsCount]);
  //
  // const currentShowedProduct = +Object.values(ww[currentPage - 1]);

  // useEffect(() => {
  //   const a1 = ww.slice(0, currentPage - 1);
  //   const a2 = a1.reduce((total, el) => {
  //     return total + Number(Object.values(el));
  //   }, 0);
  //   const a3 = a2 + currentShowedProduct;
  //   const result = totalProductsCount.slice(a2, a3);
  //
  //   setCurrentProduct(result);
  // }, [currentPage, currentShowedProduct]);

  // const handlePageClick = ({ selected }: { selected: number }) => {
  //   setCurrentPage(selected + 1);
  // };
  //
  // useEffect(() => {
  //   setVisibleProductsCount(currentShowedProduct);
  // }, [currentShowedProduct]);
  //

  // TODO: make pagination works again!
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
  const { setIsMobileFilterVisible } = useContext(
    CatalogContext,
  ) as TCatalogContext;

  const handleVisibleFilter = () => {
    setIsMobileFilterVisible(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={c.mobile_filter}>
      <span>Filter:</span>

      <img
        src={mobileFilter}
        alt="mobile filter icon"
        onClick={handleVisibleFilter}
      />
    </div>
  );
};

const FilterTags = () => {
  const {
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    isTypeChecked,
    setIsTypeChecked,
  } = useContext(CatalogContext) as TCatalogContext;

  // TODO: show all selected filters
  const filteredValues = Object.entries({
    ...isTypeChecked,
    ...isAvailabilityChecked,
  })
    .filter(([, value]) => value === true)
    .map(([key, value]) => ({ [key]: value }));

  // TODO: make to work with all filters
  const handleClear = () => {
    setIsAvailabilityChecked({ 'In Stock': false, 'Not Available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  // TODO: make remove any selected filters
  const handleRemove = (value: string[]) => () => {
    const valStr = String(value);

    if (Object.prototype.hasOwnProperty.call(isTypeChecked, valStr)) {
      setIsTypeChecked({ ...isTypeChecked, [valStr]: false });
    }

    if (Object.prototype.hasOwnProperty.call(isAvailabilityChecked, valStr)) {
      setIsAvailabilityChecked({ ...isAvailabilityChecked, [valStr]: false });
    }
  };

  return (
    <div className={c.filtered_values_section}>
      {filteredValues?.map((value, i) => (
        <div key={i} className={c.filtered_value_box}>
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
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
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
  );
};

Products.Filters = ({ filters }: { filters: React.ReactNode }) => (
  <FilterProducts>{filters}</FilterProducts>
);

Products.Header = ({ title }: { title: string }) => {
  const [sortByFilter, setSortByFilter] = useState<string[]>(['Low To High']);

  return (
    <div className={c.title_and_sortBy_section}>
      <h2>{title}</h2>

      <div className={c.sort_by}>
        <p>Sort by:</p>

        <Dropdown2
          isSidebarDropdown={false}
          isOpen={false}
          selectedFilters={sortByFilter}
          setSelectedFilters={setSortByFilter}
        />
      </div>
    </div>
  );
};

Products.ProductList = ({ products }: { products: BaseProduct[] }) => {
  const handleShowMore = () => {};

  if (products.length === 0) {
    return (
      <div className="flex justify-center">
        <BounceLoader size={50} color="#a8a8a8" />
      </div>
    );
  }

  return (
    <>
      <div className={c['all-products']}>
        {products.map(product => (
          <ProductItem key={product.id+product.title} product={product} />
        ))}
      </div>

      <ButtonShowMore handleShowMore={handleShowMore} />
    </>
  );
};
