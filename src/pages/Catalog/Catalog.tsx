import { Dispatch, createContext, useState } from 'react';
import { AllProducts } from '../../components/AllProductsSection/AllProducts';
import { FilterProducts } from '../../components/AllProductsSection/Sidebar';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CategoryOfDrones } from '../../components/CategoryOfDrones';
import styles from './Catalog.module.scss';

export type TAvailabilityChecked = {
  'In stock': boolean;
  'Not available': boolean;
};

export type TTypeChecked = {
  'Model Drone': boolean;
  'Ready-Solution Drone': boolean;
};

export type TCatalogContext = {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<React.SetStateAction<string[]>>;
  isAvailabilityChecked: TAvailabilityChecked;
  setIsAvailabilityChecked: Dispatch<
    React.SetStateAction<TAvailabilityChecked>
  >;
  isTypeChecked: TTypeChecked;
  setIsTypeChecked: Dispatch<React.SetStateAction<TTypeChecked>>;
  isMobileFilterVisible: boolean;
  setIsMobileFilterVisible: Dispatch<React.SetStateAction<boolean>>;
};

export const CatalogContext = createContext<TCatalogContext | null>(null);

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Drone',
    'Accessories',
  ]);

  const [isAvailabilityChecked, setIsAvailabilityChecked] = useState({
    'In stock': true,
    'Not available': false,
  });

  const [isTypeChecked, setIsTypeChecked] = useState({
    'Model Drone': true,
    'Ready-Solution Drone': true,
  });

  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  return (
    <CatalogContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        isAvailabilityChecked,
        setIsAvailabilityChecked,
        isTypeChecked,
        setIsTypeChecked,
        isMobileFilterVisible,
        setIsMobileFilterVisible,
      }}
    >
      <Breadcrumbs />

      <CategoryOfDrones />

      <section className={styles.all_products_wrap}>
        <FilterProducts />
        <AllProducts />
      </section>
    </CatalogContext.Provider>
  );
};

export default Catalog;
