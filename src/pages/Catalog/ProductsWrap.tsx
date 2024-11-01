import { createContext, useContext, useEffect, useState } from 'react';
import { Products } from '../../components/Products';
import useAccessories from '../../hooks/useAccessories';
import useDrones from '../../hooks/useDrones';
import useFilters from '../../hooks/useFilters';
import useSubcategories from '../../hooks/useSubcategories';
import { setCurrentCategory } from '../../redux/filtersSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { BaseProduct } from '../../redux/types';
import { getFilteredProducts } from '../../utils/filters';
import styles from './Catalog.module.scss';
import { CatalogContext } from './providers/CatalogProvider';
import { SortProvider } from './providers/SortProvider';

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

  // Call to load subcategories, required for filters!
  const subcategories = useSubcategories();

  // If user changes selected category and subcategories is loaded,
  // it changes current filter groups in redux state,
  // then it shows filter groups for selected category on current category page.
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentCategory(selectedCategory));
  }, [selectedCategory, subcategories]);

  return (
    <SortProvider>
      <section className={styles.all_products_wrap}>
        {selectedCategory === 'All Products' && <AllProducts />}
        {selectedCategory === 'Drones' && <Drones />}
        {selectedCategory === 'Accessories' && <Accessories />}
      </section>
    </SortProvider>
  );
};
export default ProductsWrap;

type ProductFiltersContext = {
  triggerApply: () => void;
  isApplyTriggered: boolean;
  minPrice: number;
  maxPrice: number;
};
export const ProductFiltersContext =
  createContext<ProductFiltersContext | null>(null);

const CategoryProducts = ({
  title,
  products,
  loading,
}: {
  title: string;
  products: BaseProduct[];
  loading: boolean;
}) => {
  const { currentFilterGroups } = useFilters();

  const [filteredProducts, setFilteredProducts] = useState<BaseProduct[]>([]);
  const [isApplyTriggered, setIsTriggerApply] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const filteredProducts = getFilteredProducts(
      products,
      currentFilterGroups,
    );

    if (!loading) {
      const minPrice = Math.min(...products.map(product => product.price));
      const maxPrice = Math.max(...products.map(product => product.price));

      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
    }

    setFilteredProducts(filteredProducts);
  }, [products]);

  const triggerApply = () => {
    setIsTriggerApply(prev => !prev);
  };

  return (
    <ProductFiltersContext.Provider
      value={{
        triggerApply,
        isApplyTriggered,
        minPrice,
        maxPrice,
      }}
    >
      <Products>
        <Products.Header title={title} />
        <Products.ProductList loading={loading} products={filteredProducts} />
        <Products.Filters filters={currentFilterGroups} />
      </Products>
    </ProductFiltersContext.Provider>
  );
};

const Drones = () => {
  const { drones, loading } = useDrones();

  return (
    <CategoryProducts title='Drones' products={drones} loading={loading} />
  );
};
const Accessories = () => {
  const { accessories, loading } = useAccessories();

  return (
    <CategoryProducts
      title='Accessories'
      products={accessories}
      loading={loading}
    />
  );
};
const AllProducts = () => {
  const { drones, loading: isDronesLoading } = useDrones();
  const { accessories, loading: isAccessoriesLoading } = useAccessories();

  const { selectedCategories } = useContext(CatalogContext)!;
  let products: BaseProduct[] = [];

  if (selectedCategories.includes('Drone')) {
    products = [...products, ...drones];
  }

  if (selectedCategories.includes('Accessories')) {
    products = [...products, ...accessories];
  }

  return (
    <CategoryProducts
      title='All Products'
      products={products}
      loading={isDronesLoading && isAccessoriesLoading}
    />
  );
};
