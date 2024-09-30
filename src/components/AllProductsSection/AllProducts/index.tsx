import { useContext, useEffect, useState } from 'react';
import c from './AllProducts.module.scss';
import img_1 from '../../../assets/catalog/all-products/image_2.png';
import img_2 from '../../../assets/catalog/all-products/image.png';
import compareImg from '../../../assets/catalog/all-products/compare_arrow.svg';
import { Dropdown2 } from '../Dropdown2';
import {
  CatalogContext,
  TCatalogContext,
} from '../../../pages/Catalog/Catalog';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Pagination } from './Pagination';
import { ButtonShowMore } from './ButtonShowMore';
import { mobileFilter } from '../../../assets/catalog/index';

const allProducts = [
  {
    id: 1,
    title: 'Agrodrone Agras',
    category: 'Drone',
    newPrice: 800,
    oldPrice: 1600,
    isNew: true,
    isInStock: true,
    href: '#',
    imagePath: img_1,
    hasColorGroups: true,
  },
  {
    id: 2,
    title: 'Agrodrone Agras',
    category: 'Accessories',
    newPrice: 800,
    oldPrice: 1600,
    isNew: true,
    isInStock: false,
    href: '#',
    imagePath: img_2,
    hasColorGroups: false,
  },
];

interface IProduct {
  id: number;
  title: string;
  category: string;
  newPrice: number;
  oldPrice: number;
  isNew: boolean;
  isInStock: boolean;
  href: string;
  imagePath: string;
  hasColorGroups: boolean;
}

export const AllProducts = () => {
  const [sortByFilter, setSortByFilter] = useState<string[]>(['Low To High']);

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

  let allProductsX80 = Array.from({ length: 41 }, (_, index) =>
    allProducts?.map(product => ({
      ...product,
      id: index * allProducts?.length + product?.id,
    }))
  ).flat();

  console.log(selectedCategories);
  if (selectedCategories?.length) {
    allProductsX80 = allProductsX80.filter(el => {
      return selectedCategories.some(category => category === el.category);
    });
  }

  const allProductsX80Length = allProductsX80?.length;
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
      })
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
        })
    );
  }, [allProductsX80?.length]);

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
    });
  };

  const [currentProduct, setCurrentProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    const ppp = document.querySelectorAll('.product article');
    if (
      ppp.length > 0 &&
      +ppp[ppp.length - 1]?.getAttribute('data-id')! === allProductsX80Length
    ) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  });

  const currentShowedProduct = +Object.values(ww[currentPage - 1]);

  useEffect(() => {
    const a1 = ww.slice(0, currentPage - 1);
    const a2 = a1.reduce((total, el) => {
      return total + Number(Object.values(el));
    }, 0);
    const a3 = a2 + currentShowedProduct;
    const result = allProductsX80.slice(a2, a3);
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

  return (
    <main>
      <div className={c.title_and_sortBy_section}>
        <h2>All Products</h2>
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

      <div className={c['all-products-box']}>
        <div className={c['all-products']}>
          {currentProduct?.map(product => (
            <Link to={product?.href} key={product?.id} className="product">
              <article className={c['product-card']} data-id={product?.id}>
                <div className={c['product-card_img-section']}>
                  <div className={c['product-card_top-section']}>
                    <div className={c['product-card_badges']}>
                      {product?.isNew && (
                        <div className={c['product-card_budge-new']}>New</div>
                      )}
                      {product?.isInStock && (
                        <div className={c['product-card_budge-inStock']}>
                          In Stock
                        </div>
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
                  <img src={product?.imagePath} alt="img 1" />
                </div>
                <div className={c['product-card_bottom-section']}>
                  <h3 className={c['product-card_title']}>{product?.title}</h3>
                  <div className={c['product-card_price']}>
                    <span>$ {product?.newPrice}</span>
                    <del>{product?.oldPrice}</del>
                  </div>
                  {product?.hasColorGroups && (
                    <>
                      {' '}
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
          ))}
        </div>

        {isShowed && <ButtonShowMore handleShowMore={handleShowMore} />}

        <Pagination handlePageClick={handlePageClick} pageCount={ww.length} />
      </div>
    </main>
  );
};
