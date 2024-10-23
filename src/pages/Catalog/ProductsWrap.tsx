import { useContext } from 'react';
import { Products } from '../../components/Products';
import { BaseProduct } from '../../redux/types';
import styles from './Catalog.module.scss';
import { CatalogContext } from './CatalogProvider';
import { SortProvider, useSort } from './SortProvider';
import AccessoriesFilters from './filters/AccessoriesFilters';
import DronesFilters from './filters/DronesFilters';
import { SortByItems } from './sortByItems';
import useAccessories from './useAccessories';
import useDrones from './useDrones';

const useSorted = (products: BaseProduct[]) => {
  const { currentSort } = useSort()!;
  return products.slice().sort(sortItemsByPrice(currentSort));
};

const sortItemsByPrice =
  (sortType: SortByItems) => (item1: BaseProduct, item2: BaseProduct) => {
    if (sortType === 'Low To High') {
      return item1.price - item2.price;
    }

    if (sortType === 'High To Low') {
      return item2.price - item1.price;
    }

    if (sortType === 'New') {
      return (
        Number(new Date(item2.created_at)) - Number(new Date(item1.created_at))
      );
    }

    if (sortType === 'Sale') {
      return (
        Number(item2.discount) -
        Number(item1.discount)
      );
    }

    return 0;
  };

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
