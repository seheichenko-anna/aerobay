import c from './Catalog.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CategoryOfDrones } from '../../components/CategoryOfDrones';
import { FilterProducts } from '../../components/AllProductsSection/Sidebar';
import { AllProducts } from '../../components/AllProductsSection/AllProducts';

const Catalog = () => {
  return (
    <>
      <Breadcrumbs />
      <section>
        <CategoryOfDrones />
      </section>
      <section className={c.all_products_wrap}>
        <FilterProducts />
        <AllProducts />
      </section>
      );
    </>
  );
};

export default Catalog;
