import { useContext } from 'react';
import { BaseProduct } from '../../redux/types';
import { CategoryProducts } from './CategoryProducts';
import { CatalogContext } from './providers/CatalogProvider';
import useSelectDrones from '../../hooks/useSelectDrones';
import useSelectAccessories from '../../hooks/useSelectAccessories';

const AllProducts = () => {
  const { drones, loading: isDronesLoading } = useSelectDrones();
  const { accessories, loading: isAccessoriesLoading } = useSelectAccessories();

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
  const { drones, loading } = useSelectDrones();

  return (
    <CategoryProducts title='Drones' products={drones} loading={loading} />
  );
};

const Accessories = () => {
  const { accessories, loading } = useSelectAccessories();

  return (
    <CategoryProducts
      title='Accessories'
      products={accessories}
      loading={loading}
    />
  );
};

export { Drones, Accessories, AllProducts };
