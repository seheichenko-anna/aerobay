import React from 'react';
import styles from './CategoryOfDrones.module.scss';
import CategoryTab from './CategoryTab';
import categoryTabs from './categoryTabs';
import { CatalogContext } from '../../pages/Catalog/CatalogProvider';

export const Categories = () => {
  const { selectedCategory } = React.useContext(CatalogContext)!;

  return (
    <section>
      <h1 className={styles.main_title}>{selectedCategory || 'Catalog'}</h1>

      <div className={styles.category}>
        {categoryTabs?.map(category => (
          <CategoryTab key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
