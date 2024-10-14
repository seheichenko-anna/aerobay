import { Dispatch, createContext, useState } from 'react';
import { CategoryTabType } from '../../components/Categories/categoryTabs';
import { TAvailabilityChecked, TDroneTypeChecked } from './filterOptions';

export type TCatalogContext = {
  selectedCategory: CategoryTabType | undefined;
  setSelectedCategory: Dispatch<
    React.SetStateAction<CategoryTabType | undefined>
  >;

  selectedCategories: string[];
  setSelectedCategories: Dispatch<React.SetStateAction<string[]>>;

  isAvailabilityChecked: TAvailabilityChecked;
  setIsAvailabilityChecked: Dispatch<
    React.SetStateAction<TAvailabilityChecked>
  >;

  isTypeChecked: TDroneTypeChecked;
  setIsTypeChecked: Dispatch<React.SetStateAction<TDroneTypeChecked>>;

  isMobileFilterVisible: boolean;
  setIsMobileFilterVisible: Dispatch<React.SetStateAction<boolean>>;
};

export const CatalogContext = createContext<TCatalogContext | null>(null);

export const CatalogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Drone',
    'Accessories',
  ]);

  const [isAvailabilityChecked, setIsAvailabilityChecked] = useState({
    'In Stock': true,
    'Not Available': false,
  });

  const [isTypeChecked, setIsTypeChecked] = useState({
    'Model Drone': true,
    'Ready-Solution Drone': true,
  });

  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<CategoryTabType>();

  return (
    <CatalogContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
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
      {children}
    </CatalogContext.Provider>
  );
};
