import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Categories } from '../../components/Categories';
import { CatalogProvider } from './providers/CatalogProvider';
import ProductsWrap from './ProductsWrap';

const Catalog = () => {
  return (
    <CatalogProvider>
      <Breadcrumbs />
      <Categories />
      <ProductsWrap />
    </CatalogProvider>
  );
};

export default Catalog;
