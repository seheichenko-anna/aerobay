import { useContext } from 'react';
import { Products } from '../../components/Products';
import AccessoriesFilters from './AccessoriesFilters';
import styles from './Catalog.module.scss';
import { CatalogContext } from './CatalogProvider';
import DronesFilters from './DronesFilters';
import useDrones from './useDrones';
import useAccessories from './useAccessories';

const Drones = () => {
  const drones = useDrones();

  return (
    <Products>
      <Products.Header title="Drones" />
      <Products.ProductList products={drones} />
      <Products.Filters filters={<DronesFilters />} />
    </Products>
  );
};

const Accessories = () => {
  const accessories = useAccessories();

  return (
    <Products>
      <Products.Header title="Accessories" />
      <Products.ProductList products={accessories} />
      <Products.Filters filters={<AccessoriesFilters />} />
    </Products>
  );
};

const AllProducts = () => {
  const drones = useDrones();
  const accessories = useAccessories();

  const allProducts = [...drones, ...accessories];

  return (
    <Products>
      <Products.Header title="All Products" />
      <Products.ProductList products={allProducts} />
    </Products>
  );
};

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

  return (
    <section className={styles.all_products_wrap}>
      {selectedCategory === 'All Products' && <AllProducts />}
      {selectedCategory === 'Drones' && <Drones />}
      {selectedCategory === 'Accessories' && <Accessories />}
    </section>
  );
};

export default ProductsWrap;
