import c from './Catalog.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CategoryOfDrones } from '../../components/CategoryOfDrones';
import { FilterProducts } from '../../components/AllProductsSection/Sidebar';
import { AllProducts } from '../../components/AllProductsSection/AllProducts';
import { Dispatch, FC, createContext, useState } from 'react';
import Productss from '../../components/AllProductsSection/AllProducts/hh/HH';

export type TCatalogContext = {
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
