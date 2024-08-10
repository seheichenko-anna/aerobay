import c from './Catalog.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CategoryOfDrones } from '../../components/CategoryOfDrones';
import { FilterProducts } from '../../components/AllProductsSection/Sidebar';
import { AllProducts } from '../../components/AllProductsSection/AllProducts';
import { Dispatch, FC, createContext, useState } from 'react';

export type TCatalogContext = {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<React.SetStateAction<string[]>>;
  isAvailabilityChecked: {
    'In stock': boolean;
    'Not available': boolean;
  };
  setIsAvailabilityChecked: Dispatch<
    React.SetStateAction<{
      'In stock': boolean;
      'Not available': boolean;
    }>
  >;
  isTypeChecked: {
    'Model Drone': boolean;
    'Ready-Solution Drone': boolean;
  };
  setIsTypeChecked: Dispatch<
    React.SetStateAction<{
      'Model Drone': boolean;
      'Ready-Solution Drone': boolean;
    }>
  >;
};

export const CatalogContext = createContext<TCatalogContext | null>(null);

const Catalog: FC = () => {
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

  return (
    <>
      <CatalogContext.Provider
        value={{
          selectedCategories,
          setSelectedCategories,
          isAvailabilityChecked,
          setIsAvailabilityChecked,
          isTypeChecked,
          setIsTypeChecked,
        }}
      >
        <Breadcrumbs />
        <section>
          <CategoryOfDrones />
        </section>
        <section className={c.all_products_wrap}>
          <FilterProducts />
          <AllProducts />
        </section>
      </CatalogContext.Provider>
    </>
  );
};

export default Catalog;
