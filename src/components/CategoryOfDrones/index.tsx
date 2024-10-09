import React from 'react';
import styles from './CategoryOfDrones.module.scss';
import CategoryTab from './CategoryTab';
import categoryTabs, { CategoryTabType } from './categoryTabs';

export const CategoryOfDrones = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryTabType>();

  return (
    <section>
      <h1 className={styles.main_title}>{selectedCategory || 'Catalog'}</h1>

      <div className={styles.category}>
        {categoryTabs?.map(category => (
          <CategoryTab
            category={category}
            selectedCategoryState={[selectedCategory, setSelectedCategory]}
          />
        ))}
      </div>
    </section>
  );
};
