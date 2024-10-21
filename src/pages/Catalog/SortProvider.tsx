import { createContext, useContext, useState } from 'react';
import { SortByItems } from './sortByItems';

export type SortContext = {
  currentSort: SortByItems;
  setCurrentSort: React.Dispatch<SortByItems>;
};

export const SortContext = createContext<SortContext | null>(null);

export const SortProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSort, setCurrentSort] = useState<SortByItems>('Unsorted');

  return (
    <SortContext.Provider
      value={{
        currentSort,
        setCurrentSort,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => useContext(SortContext)
