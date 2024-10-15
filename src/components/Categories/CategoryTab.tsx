import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CategoryOfDrones.module.scss';
import categoryTabs, { CategoryTabType } from './categoryTabs';
import { CatalogContext } from '../../pages/Catalog/CatalogProvider';

type CategoryType = {
  id: number;
  title: CategoryTabType;
  href: string;
  imagePath: string;
  smallImagePath: string;
};

type CategoryTabProps = {
  /** The category object containing details about the category. */
  category: CategoryType;
};

/**
 * A component that renders a category tab for selecting different categories of products on site.
 * It displays the category's image and title, and highlights the active category.
 */
const CategoryTab = (props: CategoryTabProps) => {
  const { selectedCategory, setSelectedCategory } =
    React.useContext(CatalogContext)!;

  const { category } = props;
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for changes in the URL and update the selected category
  useEffect(() => {
    // Split the pathname and filter out empty strings
    const path = location.pathname.split('/').filter(Boolean);

    // Check if there's a valid category that matches the second part of the path
    const matchingCategory = categoryTabs.find(cat => cat.href === path[1]);

    // Ensure the path has exactly two parts: catalog and a category
    if (matchingCategory && path.length === 2) {
      setSelectedCategory(matchingCategory.title);
      return;
    }

    // Reset if no matching category is found
    setSelectedCategory('All Products');
  }, [location.pathname, setSelectedCategory]);

  /**
   * Changes the currently selected category tab.
   * If the provided `categoryTitle` matches the current `selectedCategory`,
   * it will deselect the category by setting it to `undefined`.
   * Otherwise, it will set the selected category to the provided `categoryTitle`.
   */
  const changeCategoryTab = (category: CategoryType) => () => {
    if (category.title === selectedCategory) {
      setSelectedCategory('All Products');
      navigate('/catalog');
      return;
    }

    navigate(`/catalog/${category.href}`);

    setSelectedCategory(category.title);
  };

  /** Returns the CSS class for highlighting the active category tab. */
  const highlightActiveTab = (categoryTitle: CategoryTabType) =>
    selectedCategory === categoryTitle ? styles['category__tab--active'] : '';

  return (
    <div
      key={category?.id}
      className={`${styles['category__tab']} ${highlightActiveTab(category.title)}`}
      onClick={changeCategoryTab(category)}
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
  );
};

export default CategoryTab;
