import {
  MutableRefObject,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Products from '../../components/Products';
import useSelectFilters from '../../hooks/useSelectFilters';
import useSorted from '../../hooks/useSorted';
import { BaseProduct } from '../../redux/types';
import { getFilteredProducts } from '../../utils/filters';

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

  const filterByCurrentCategoryGroups = (products: BaseProduct[]) =>
    getFilteredProducts(products, currentFilterGroups);

  const filterByPrice = (products: BaseProduct[]) =>
    products.filter(product => product.price <= currentPriceRef.current);

  const applyFilters = () => {
    const filteredProductsByPrice = filterByPrice(products);
    const filteredProducts = filterByCurrentCategoryGroups(
      filteredProductsByPrice,
    );

    callAfterFiltering(filteredProducts);
  };

  const clearFilters = () => {
    currentPriceRef.current = maxPrice;

    callAfterFiltering(products);
  };

  const callAfterFiltering = (newProducts: BaseProduct[]) => {
    setCatalogProducts(newProducts);

    if (isMobileFilterVisible) {
      setIsMobileFilterVisible(false);
    }
  };

  useEffect(() => {
    const filteredProducts = filterByCurrentCategoryGroups(products);

    if (!loading) {
      const minPrice = Math.min(...products.map(product => product.price));
      const maxPrice = Math.max(...products.map(product => product.price));

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      currentPriceRef.current = maxPrice;
    }

    setCatalogProducts(filteredProducts);
  }, [products]);

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
