import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import compareImg from '../../assets/catalog/all-products/compare_arrow.svg';
import { mobileFilter } from '../../assets/catalog/index';
import {
  CatalogContext,
  TCatalogContext,
} from '../../pages/Catalog/CatalogProvider';
import { BaseProduct } from '../../redux/types';
import { ButtonShowMore } from './ButtonShowMore';
import { allProducts } from './consts';
import { Dropdown2 } from './Dropdown2';
import { Pagination } from './Pagination';
import c from './Products.module.scss';
import { FilterProducts } from './Sidebar';
import { IProduct } from './types';
import { BounceLoader } from 'react-spinners'

export const Products = ({ children }: { children: React.ReactNode[] }) => {
  const {
    selectedCategories,
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    isTypeChecked,
    setIsTypeChecked,
    setIsMobileFilterVisible,
  } = useContext(CatalogContext) as TCatalogContext;

  const filteredValues = Object.entries({
    ...isTypeChecked,
    ...isAvailabilityChecked,
  })
    .filter(([, value]) => value === true)
    .map(([key, value]) => ({ [key]: value }));

  const handleClear = () => {
    setIsAvailabilityChecked({ 'In Stock': false, 'Not Available': false });
    setIsTypeChecked({ 'Model Drone': false, 'Ready-Solution Drone': false });
  };

  /**
   * Function to remove specific filters based on user selection
   */
  const handleRemove = (value: string[]) => () => {
    const valStr = String(value);
    if (isTypeChecked.hasOwnProperty(valStr)) {
      setIsTypeChecked({ ...isTypeChecked, [valStr]: false });
    }
    if (isAvailabilityChecked.hasOwnProperty(valStr)) {
      setIsAvailabilityChecked({ ...isAvailabilityChecked, [valStr]: false });
    }
  };

  /**
   * Calculate the total number of products by mapping
   * the allProducts array and adding unique IDs to each product
   */
  let totalProductsCount = Array.from({ length: 41 }, (_, index) =>
    allProducts?.map(product => ({
      ...product,
      id: index * allProducts?.length + product?.id,
    })),
  ).flat();

  // Filter the total products if there are selected categories
  if (selectedCategories?.length) {
    totalProductsCount = totalProductsCount.filter(el => {
      return selectedCategories.some(category => category === el.category);
    });
  }

  const allProductsX80Length = totalProductsCount?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProductsCount, setVisibleProductsCount] = useState(9);

  const [isShowed, setIsShowed] = useState(true);

  const er = allProductsX80Length / visibleProductsCount;
  const [ww, setWW] = useState(
    Array(Math.ceil(er))
      .fill(0)
      .map((_, i) => {
        if (i + 1 === Math.ceil(er)) {
          const a1 = Math.ceil(er) - 1;
          const a2 = allProductsX80Length - a1 * 9;
          return { [i + 1]: a2 };
        }
        return { [i + 1]: 9 };
      }),
  );

  useEffect(() => {
    setWW(
      Array(Math.ceil(er))
        .fill(0)
        .map((_, i) => {
          if (i + 1 === Math.ceil(er)) {
            const a1 = Math.ceil(er) - 1;
            const a2 = allProductsX80Length - a1 * 9;
            return { [i + 1]: a2 };
          }
          return { [i + 1]: 9 };
        }),
    );
  }, [totalProductsCount?.length]);

  const handleShowMore = () => {
    setWW(prev => {
      let newWW = [...prev];

      newWW[currentPage - 1] = {
        [currentPage]: prev[currentPage - 1][currentPage] + 3,
      };
      if (newWW[newWW.length - 1][newWW.length] >= 3) {
        newWW[newWW.length - 1] = {
          [newWW.length]: prev[newWW.length - 1][newWW.length] - 3,
        };
        if (newWW[newWW.length - 1][newWW.length] === 0) {
          newWW = newWW.slice(0, newWW.length - 1);
        }
      } else if (newWW[newWW.length - 1][newWW.length] === 2) {
        if (currentPage === newWW.length - 1) {
          newWW[newWW.length - 2] = {
            [newWW.length - 1]: prev[newWW.length - 2][newWW.length - 1] + 2,
          };
        } else {
          newWW[newWW.length - 1] = {
            [newWW.length]: prev[newWW.length - 1][newWW.length] - 2,
          };
          newWW[newWW.length - 2] = {
            [newWW.length - 1]: prev[newWW.length - 2][newWW.length - 1] - 1,
          };
        }
        newWW = newWW.slice(0, newWW.length - 1);
      } else if (newWW[newWW.length - 1][newWW.length] === 1) {
        if (currentPage === newWW.length - 1) {
          newWW[newWW.length - 2] = {
            [newWW.length - 1]: prev[newWW.length - 2][newWW.length - 1] + 1,
          };
        } else {
          newWW[newWW.length - 1] = {
            [newWW.length]: prev[newWW.length - 1][newWW.length] - 1,
          };
          newWW[newWW.length - 2] = {
            [newWW.length - 1]: prev[newWW.length - 2][newWW.length - 1] - 2,
          };
        }
        newWW = newWW.slice(0, newWW.length - 1);
      } else {
        newWW[newWW.length - 2] = {
          [newWW.length - 1]: prev[newWW.length - 2][newWW.length - 1] - 3,
        };
        newWW = newWW.slice(0, newWW.length - 2);
      }
      return newWW;
    });
  };

  const [currentProduct, setCurrentProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    const productElements = document.querySelectorAll('.product article');
    const lastProductElement = productElements[productElements.length - 1];
    const lastProductDataId =
      lastProductElement?.getAttribute('data-id') ?? '0'; // Fallback to '0' if null

    const totalProductsLength = totalProductsCount.length; // Assuming it's an array
    const isAllProductsLoaded =
      productElements.length > 0 && +lastProductDataId === totalProductsLength;

    setIsShowed(!isAllProductsLoaded);
  }, [totalProductsCount]);

  const currentShowedProduct = +Object.values(ww[currentPage - 1]);

  useEffect(() => {
    const a1 = ww.slice(0, currentPage - 1);
    const a2 = a1.reduce((total, el) => {
      return total + Number(Object.values(el));
    }, 0);
    const a3 = a2 + currentShowedProduct;
    const result = totalProductsCount.slice(a2, a3);
    setCurrentProduct(result);
  }, [currentPage, currentShowedProduct]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setVisibleProductsCount(currentShowedProduct);
  }, [currentShowedProduct]);

  const handleVisibleFilter = () => {
    setIsMobileFilterVisible(true);
    document.body.style.overflow = 'hidden';
  };

  // get compound elements from children inside fragment
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

        <div className={c.mobile_filter}>
          <span>Filter:</span>
          <img
            src={mobileFilter}
            alt="mobile filter icon"
            onClick={handleVisibleFilter}
          />
        </div>

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

        <div className={c['all-products-box']}>
          {productList}

          {isShowed && <ButtonShowMore handleShowMore={handleShowMore} />}

          <Pagination
            handlePageClick={handlePageClick}
            pageCount={ww.length}
          />
        </div>
      </main>
    </>
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
  return (
    <div className={c['all-products']}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

interface ImageWithLoaderProps {
  src: string;
  alt?: string;
  loaderSize?: number;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt = 'image',
  loaderSize = 40,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      {loading && (
        <div
          style={{
            // position: 'absolute',
            // top: '50%',
            // left: '50%',
            // transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%'
          }}
        >
          <BounceLoader size={loaderSize} color="#a8a8a8" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoad}
        onError={() => setLoading(false)} // Optional: Handle broken images
      />
    </div>
  );
};

const ProductItem = ({ product }: { product: IProduct }) => {
  return (
    <Link to={String(product.id)} key={product.id} className="product">
      <article className={c['product-card']} data-id={product?.id}>
        <div className={c['product-card_img-section']}>
          <div className={c['product-card_top-section']}>
            <div className={c['product-card_badges']}>
              {product.isNew && (
                <div className={c['product-card_budge-new']}>New</div>
              )}
              {product.isInStock && (
                <div className={c['product-card_budge-inStock']}>In Stock</div>
              )}
            </div>

            <div
              className={c['product-card_compare']}
              data-tooltip-id="compare-tooltip"
              data-tooltip-content="Compare"
            >
              <img src={compareImg} alt="compare the product" />
            </div>
            <Tooltip id="compare-tooltip" place="left" />
          </div>

          <ImageWithLoader
            src={product?.image_url.replace('dl=0', 'raw=1')}
            alt="img 1"
          />
        </div>

        <div className={c['product-card_bottom-section']}>
          <h3 className={c['product-card_title']}>{product?.title}</h3>
          <div className={c['product-card_price']}>
            <span>$ {product.price}</span>
            {/* <span>$ {product.newPrice}</span> */}
            {/* <del>{product.oldPrice}</del> */}
          </div>
          {product?.hasColorGroups && (
            <>
              <div className={c['product-card_color-groups']}>
                <p
                  data-tooltip-id="yellow-tooltip"
                  data-tooltip-content="Yellow"
                >
                  <p>
                    <div></div>
                  </p>
                </p>

                <p
                  data-tooltip-id="green-tooltip"
                  data-tooltip-content="Green"
                >
                  <p
                    data-tooltip-id="green-tooltip"
                    data-tooltip-content="Green"
                  >
                    <div></div>
                  </p>
                </p>

                <p
                  data-tooltip-id="light-blue-tooltip"
                  data-tooltip-content="Light Blue"
                >
                  <p>
                    <div></div>
                  </p>
                </p>
              </div>
              <Tooltip id="yellow-tooltip" place="top" />
              <Tooltip id="green-tooltip" place="top" />{' '}
              <Tooltip id="light-blue-tooltip" place="top" />
            </>
          )}
        </div>
      </article>
    </Link>
  );
};
