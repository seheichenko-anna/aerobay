import { useContext } from 'react';
import { Products } from '../../components/Products';
import { FilterProducts } from '../../components/Products/Sidebar';
import { CatalogContext } from './CatalogProvider';
import styles from './Catalog.module.scss';
import AccessoriesFilters from './AccessoriesFilters';
import DronesFilters from './DronesFilters';

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

  return (
    <section className={styles.all_products_wrap}>
      <FilterProducts>
        {selectedCategory === 'Drones' && <DronesFilters />}
        {selectedCategory === 'Accessories' && <AccessoriesFilters />}
      </FilterProducts>

      <Products>
        {selectedCategory === 'All Products' && (
          <Products.Header title="All Products" />
        )}
        {selectedCategory === 'Drones' && <Products.Header title="Drones" />}
        {selectedCategory === 'Accessories' && (
          <Products.Header title="Accessories" />
        )}
      </Products>
    </section>
  );
};

// Products>Products.Filters+Products.ProductList

export default ProductsWrap;
