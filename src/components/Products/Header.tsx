import { useContext, useState } from 'react';
import { SortDropdown } from './SortDropdown';
import styles from './Products.module.scss';
import FilterTags from './FilterTags';
import { mobileFilter } from '../../assets/catalog';
import { ProductFiltersContext } from '../../pages/Catalog/CategoryProducts';

const Header = ({ title }: { title: string }) => {
  const [sortByFilter, setSortByFilter] = useState<string[]>(['Low To High']);

  return (
    <>
      <div className={styles.title_and_sortBy_section}>
        <h2>{title}</h2>

        <div className={styles.sort_by}>
          <p>Sort by:</p>

          <SortDropdown
            isSidebarDropdown={false}
            isOpen={false}
            selectedFilters={sortByFilter}
            setSelectedFilters={setSortByFilter}
          />
        </div>
      </div>

      <div className={styles.mobile_devider}></div>

      <MoreFiltersMobileBtn />

      <FilterTags />
    </>
  );
};

const MoreFiltersMobileBtn = () => {
  const { setIsMobileFilterVisible } = useContext(ProductFiltersContext)!;

  const handleVisibleFilter = () => {
    setIsMobileFilterVisible(true);
  };

  return (
    <div className={styles.mobile_filter}>
      <span>Filter:</span>

      <img
        src={mobileFilter}
        alt='mobile filter icon'
        onClick={handleVisibleFilter}
      />
    </div>
  );
};

export default Header;
