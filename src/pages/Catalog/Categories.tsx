import { useContext } from 'react';
import useAccessories from '../../hooks/useAccessories';
import useDrones from '../../hooks/useDrones';
import { BaseProduct } from '../../redux/types';
import { CategoryProducts } from './CategoryProducts';
import { CatalogContext } from './providers/CatalogProvider';

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

export { Drones, Accessories, AllProducts };
