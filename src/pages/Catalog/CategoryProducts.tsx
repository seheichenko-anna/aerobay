import React, {
    MutableRefObject,
    createContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../../components/Products';
import useSelectFilters from '../../hooks/useSelectFilters';
import useSorted from '../../hooks/useSorted';
import {
    useClearFilters,
    useUpdateFilters,
} from '../../hooks/useUpdateFilters';
import { toggleOptions } from '../../redux/filtersSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { BaseProduct } from '../../redux/types';
import { getFilteredProducts } from '../../utils/filters';
import { CatalogContext } from './providers/CatalogProvider';

type ProductFiltersContext = {
  applyFilters: () => void;
  clearFilters: () => void;

  isMobileFilterVisible: boolean;
  setIsMobileFilterVisible: React.Dispatch<boolean>;

  minPrice: number;
  maxPrice: number;
  currentPriceRef: MutableRefObject<number>;
};
export const ProductFiltersContext =
  createContext<ProductFiltersContext | null>(null);

export const CategoryProducts = ({
  title,
  products,
  loading,
}: {
  title: string;
  products: BaseProduct[];
  loading: boolean;
}) => {
  const [catalogProducts, setCatalogProducts] = useState<BaseProduct[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const currentPriceRef = useRef(0);

  const { currentFilterGroups } = useSelectFilters();
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const updateFiltersInURI = useUpdateFilters();
  const clearFiltersFromURI = useClearFilters();
  const location = useLocation();

  const filterByCurrentCategoryGroups = (products: BaseProduct[]) => 
    getFilteredProducts(products, currentFilterGroups);

  const filterByPrice = (products: BaseProduct[]) =>
    products.filter(product => product.price <= currentPriceRef.current);

  const applyFilters = () => {
    const filteredProductsByPrice = filterByPrice(products);
    const filteredProducts = filterByCurrentCategoryGroups(
      filteredProductsByPrice,
    );

    updateFiltersInURI(currentFilterGroups);

    callAfterFiltering(filteredProducts);
  };

  const clearFilters = () => {
    currentPriceRef.current = maxPrice;

    clearFiltersFromURI();

    callAfterFiltering(products);
  };

  const callAfterFiltering = (newProducts: BaseProduct[]) => {
    setCatalogProducts(newProducts);

    if (isMobileFilterVisible) {
      setIsMobileFilterVisible(false);
    }
  };

  const { selectedCategory } = React.useContext(CatalogContext)!;
  const dispatch = useAppDispatch()

  // Extract filters from URL and populate currentFilterGroups
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersFromURL: typeof currentFilterGroups = [];

    // Map query parameters to filter groups
    searchParams.forEach((value, key) => {
      const options = value.split(',').map(label => ({
        label,
        checked: true,
      }));

      filtersFromURL.push({ title: key, options, category: selectedCategory });
    });

    if (filtersFromURL.length > 0 && currentFilterGroups.length > 0) {
      // Apply filters on initial load
      const filteredProducts = filterByCurrentCategoryGroups(products);
      setCatalogProducts(filteredProducts);
      dispatch(toggleOptions(filtersFromURL))
    }
  }, [location.search, products, loading]);

  useEffect(() => {
    if (!loading) {
      const minPrice = Math.min(...products.map(product => product.price));
      const maxPrice = Math.max(...products.map(product => product.price));

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      currentPriceRef.current = maxPrice;
    }
  }, [products, loading]);

  return (
    <ProductFiltersContext.Provider
      value={{
        maxPrice,
        minPrice,
        currentPriceRef,
        applyFilters,
        clearFilters,
        isMobileFilterVisible,
        setIsMobileFilterVisible,
      }}
    >
      <Products>
        {catalogProducts.length > 0 && <Products.Header title={title} />}

        <Products.ProductList
          loading={loading}
          products={useSorted(catalogProducts)}
        />

        <Products.Filters filters={currentFilterGroups} />
      </Products>
    </ProductFiltersContext.Provider>
  );
};
