import styles from './CategoryOfDrones.module.scss';
import { CategoryTabType } from './categoryTabs';

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

  /** An array containing the current selected category state. **/
  selectedCategoryState: [
    CategoryTabType | undefined,
    React.Dispatch<CategoryTabType | undefined>,
  ];
};

/**
 * A component that renders a category tab for selecting different categories of products on site.
 * It displays the category's image and title, and highlights the active category.
 */
const CategoryTab = (props: CategoryTabProps) => {
  const { category, selectedCategoryState } = props;
  const [selectedCategory, setSelectedCategory] = selectedCategoryState;

  /**
   * Changes the currently selected category tab.
   * If the provided `categoryTitle` matches the current `selectedCategory`,
   * it will deselect the category by setting it to `undefined`.
   * Otherwise, it will set the selected category to the provided `categoryTitle`.
   */
  const changeCategoryTab = (categoryTitle: CategoryTabType) => () => {
    if (categoryTitle === selectedCategory) {
      setSelectedCategory(undefined);
      return;
    }

    setSelectedCategory(categoryTitle);
  };

  /** Returns the CSS class for highlighting the active category tab. */
  const highlightActiveTab = (categoryTitle: CategoryTabType) =>
    selectedCategory === categoryTitle ? styles['category__tab--active'] : '';

  return (
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
  );
};

export default CategoryTab;
