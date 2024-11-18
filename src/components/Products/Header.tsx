import { useState } from 'react';
import { SortDropdown } from './SortDropdown';
import styles from './Products.module.scss';
import FilterTags from './FilterTags';

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

      <FilterTags />
    </>
  );
};

export default Header;
