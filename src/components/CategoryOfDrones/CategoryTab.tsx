import styles from './CategoryOfDrones.module.scss';
import { CategoryTabType, CategoryType } from './categoryTabs';

type CategoryTabProps = {
  category: CategoryType;
  selectedCategoryState: [
    CategoryTabType | undefined,
    React.Dispatch<CategoryTabType | undefined>,
  ];
};

const CategoryTab = (props: CategoryTabProps) => {
  const { category, selectedCategoryState } = props;
  const [selectedCategory, setSelectedCategory] = selectedCategoryState;

  const changeCategoryTab = (categoryTitle: CategoryTabType) => () => {
    if (categoryTitle === selectedCategory) {
      setSelectedCategory(undefined);
      return;
    }

    setSelectedCategory(categoryTitle);
  };

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
