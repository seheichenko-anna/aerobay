import { Dispatch, createContext, useState } from 'react';
import { CategoryTabType } from '../../../components/Categories/categoryTabs';

export type TCatalogContext = {
  selectedCategory: CategoryTabType;
  setSelectedCategory: Dispatch<
    React.SetStateAction<CategoryTabType>
  >;

  selectedCategories: string[];
  setSelectedCategories: Dispatch<React.SetStateAction<string[]>>;

  // isMobileFilterVisible: boolean;
  // setIsMobileFilterVisible: Dispatch<React.SetStateAction<boolean>>;
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

  // const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<CategoryTabType>('All Products');

  return (
    <CatalogContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedCategories,
        setSelectedCategories,
        // isMobileFilterVisible,
        // setIsMobileFilterVisible,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
