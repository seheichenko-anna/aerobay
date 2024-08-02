import { FC, useContext, useEffect, useRef, useState } from 'react';
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
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { Pagination } from './Pagination';
import { ButtonShowMore } from './ButtonShowMore';

const cache = {};
let prevValue;

export const AllProducts: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'Low To High',
  ]);

  const {
    isAvailabilityChecked,
    setIsAvailabilityChecked,
    isTypeChecked,
    setIsTypeChecked,
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

  const allProducts = [
    {
      id: 1,
      title: 'Agrodrone Agras',
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
      newPrice: 800,
      oldPrice: 1600,
      isNew: true,
      isInStock: false,
      href: '#',
      imagePath: img_2,
      hasColorGroups: false,
    },
  ];

  const allProductsX80 = Array.from({ length: 40 }, (_, index) =>
    allProducts?.map(product => ({
      ...product,
      id: index * allProducts?.length + product?.id,
    }))
  ).flat();
  const allProductsX80Length = allProductsX80?.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProductsCount, setVisibleProductsCount] = useState(9);
  const productsPerPage = visibleProductsCount;
  //  const [start, setStart] = useState();
  const start = useRef((currentPage - 1) * productsPerPage);

  const [isShowed, setIsShowed] = useState(true);

  const handleShowMore = () => {
    setVisibleProductsCount(prevVisibleProductsCount =>
      Math.min(prevVisibleProductsCount + 3, allProductsX80Length)
    );
  };
  console.log(
    allProductsX80Length - cache.current + cache.current ===
      allProductsX80Length
  );
  /*   useEffect(() => {
    const ppp = document.querySelectorAll('.product article');
    console.log(ppp[ppp.length - 1]?.getAttribute('data-id'));
  }); */

  /*   if (
    allProductsX80Length - cache.current + cache.current ===
    allProductsX80Length && currentPage
  ) {
    setIsShowed(false);
  } else {
    if (isShowed === false) {
      setIsShowed(true);
    }
  } */
  console.log(allProductsX80Length - cache.current);

  const [currentP, setCurrentP] = useState([]);

  useEffect(() => {
    const ppp = document.querySelectorAll('.product article');
    if (
      +ppp[ppp.length - 1]?.getAttribute('data-id') === allProductsX80Length
    ) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  });

  useEffect(() => {
    let oo = (currentPage - 1) * productsPerPage;

    cache.current = oo;
    prevValue = oo;

    if (cache.current === (currentPage - 1) * productsPerPage) {
      const currentProducts = allProductsX80.slice(
        cache.current,
        cache.current + visibleProductsCount >= allProductsX80Length
          ? allProductsX80Length
          : cache.current + visibleProductsCount
      );
      setCurrentP(currentProducts);
    }
  }, [currentPage]);

  const handlePageClick = data => {
    setCurrentPage(data.selected + 1);
  };

  useEffect(() => {
    let oo =
      (currentPage - 1) * productsPerPage >= allProductsX80Length
        ? cache.current
        : (currentPage - 1) * productsPerPage;

    cache.current = oo;
    console.log(cache);

    if (cache.current === (currentPage - 1) * productsPerPage) {
      console.log(cache.current);
      console.log(visibleProductsCount);

      const currentProducts = allProductsX80.slice(
        cache.current,
        cache.current + visibleProductsCount >= allProductsX80Length
          ? allProductsX80Length
          : cache.current + visibleProductsCount
      );

      setCurrentP(currentProducts);
    }
  }, [visibleProductsCount]);

  const er = allProductsX80Length / productsPerPage;

  const ee = Array(Math.round(er))
    .fill()
    .map((_, i) => {
      return { [i + 1]: 9 };
    });
  console.log(ee);

  const aa = {};

  return (
    <main>
      <div className={c.title_and_sortBy_section}>
        <h2>All Products</h2>
        <div className={c.sort_by}>
          <p>Sort by:</p>
          <Dropdown2
            isSidebarDropdown={false}
            isOpen={false}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
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
          {currentP?.map(product => (
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
                    <Tooltip
                      className={c['product-card_compare-tooltip']}
                      title="Compare"
                      position="left"
                      trigger="mouseenter"
                      arrow={true}
                    >
                      <div className={c['product-card_compare']}>
                        <img src={compareImg} alt="compare the product" />
                      </div>
                    </Tooltip>
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
                    <div className={c['product-card_color-groups']}>
                      <Tooltip
                        className={c['product-card_compare-tooltip']}
                        title="Yellow"
                        position="top"
                        trigger="mouseenter"
                        arrow={true}
                      >
                        <p>
                          <div></div>
                        </p>
                      </Tooltip>
                      <Tooltip
                        className={c['product-card_compare-tooltip']}
                        title="Green"
                        position="top"
                        trigger="mouseenter"
                        arrow={true}
                      >
                        <p>
                          <div></div>
                        </p>
                      </Tooltip>
                      <Tooltip
                        className={c['product-card_compare-tooltip']}
                        title="Light Blue"
                        position="top"
                        trigger="mouseenter"
                        arrow={true}
                      >
                        <p>
                          <div></div>
                        </p>
                      </Tooltip>
                    </div>
                  )}
                </div>
                <span className={c['product-card_number-of-card']}>
                  {product?.id}
                </span>
              </article>
            </Link>
          ))}
        </div>

        {isShowed && <ButtonShowMore handleShowMore={handleShowMore} />}

        <Pagination
          handlePageClick={handlePageClick}
          pageCount={Math.ceil(allProductsX80Length / productsPerPage)}
        />
      </div>
    </main>
  );
};
