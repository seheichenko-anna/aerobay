import React from 'react';
import styles from './CategoryOfDrones.module.scss';
import categoryTabs, { CategoryTab } from './categoryTabs';

export const CategoryOfDrones = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryTab>();

  const changeCategoryTab = (categoryTitle: CategoryTab) => () => {
    if (categoryTitle === selectedCategory) {
      setSelectedCategory(undefined);
      return;
    }

    setSelectedCategory(categoryTitle);
  };

  const highlightActiveTab = (categoryTitle: CategoryTab) =>
    selectedCategory === categoryTitle ? styles['category__tab--active'] : '';

  return (
    <section>
      <div className={styles.category}>
        {categoryTabs?.map(category => (
          <div
            key={category?.id}
            className={`${styles['category__tab']} ${highlightActiveTab(category.title)}`}
            onClick={changeCategoryTab(category.title)}
          >
            <div>
              <picture>
                <source
                  type="image/png"
                  media="(max-width: 768px)"
                  srcSet={category?.smallImagePath}
                />

                <img src={category?.imagePath} alt={category?.title} />
              </picture>
            </div>

            <p>{category?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
