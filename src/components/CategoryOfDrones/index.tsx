import React from 'react';
import styles from './CategoryOfDrones.module.scss';
import CategoryTab from './CategoryTab';
import categoryTabs, { CategoryTabType } from './categoryTabs';

export const CategoryOfDrones = () => {
  const selectedCategoryState = React.useState<CategoryTabType>();

  return (
    <section>
      <div className={styles.category}>
        {categoryTabs?.map(category => (
          <CategoryTab
            category={category}
            selectedCategoryState={selectedCategoryState}
          />
        ))}
      </div>
    </section>
  );
};
