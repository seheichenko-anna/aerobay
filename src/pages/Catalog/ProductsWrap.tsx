import { useContext } from 'react';
import { Products } from '../../components/Products';
import styles from './Catalog.module.scss';
import { CatalogContext } from './CatalogProvider';
import { SortProvider } from './SortProvider';
import AccessoriesFilters from './filters/AccessoriesFilters';
import DronesFilters from './filters/DronesFilters';
import useAccessories from './useAccessories';
import useDrones from './useDrones';
import useSorted from './useSorted';

const Drones = () => {
  const drones = useSorted(useDrones());

  return (
    <Products>
      <Products.Header title='Drones' />
      <Products.ProductList products={drones} />
      <Products.Filters filters={<DronesFilters />} />
    </Products>
  );
};

const Accessories = () => {
  const accessories = useSorted(useAccessories());

  return (
    <Products>
      <Products.Header title='Accessories' />
      <Products.ProductList products={accessories} />
      <Products.Filters filters={<AccessoriesFilters />} />
    </Products>
  );
};

const AllProducts = () => {
  const allProducts = useSorted([...useDrones(), ...useAccessories()]);

  return (
    <Products>
      <Products.Header title='All Products' />
      <Products.ProductList products={allProducts} />
    </Products>
  );
};

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

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
