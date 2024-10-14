import { useContext } from "react";
import { Products } from "../../components/ProductsSection/Products";
import { FilterProducts } from "../../components/ProductsSection/Sidebar";
import { CatalogContext } from "./CatalogProvider";
import styles from "./Catalog.module.scss"
import AccessoriesFilters from "./AccessoriesFilters";
import DronesFilters from "./DronesFilters";

const ProductsWrap = () => {
  const { selectedCategory } = useContext(CatalogContext)!;

  return (
    <section className={styles.all_products_wrap}>
      <FilterProducts>
        {selectedCategory === 'Drones' ? <DronesFilters /> : <></>}
        {selectedCategory === 'Accessories' ? <AccessoriesFilters /> : <></>}
      </FilterProducts>

      {selectedCategory === undefined ? (
        <Products title="All Products" />
      ) : (
        <></>
      )}
      {selectedCategory === 'Drones' ? <Products title="Drones" /> : <></>}
      {selectedCategory === 'Accessories' ? (
        <Products title="Accessories" />
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProductsWrap
