import c from './CategoryOfDrones.module.scss';
import {
  dronesImg,
  accessoriesImg,
  customizeDroneImg,
  dronesSmallImg,
  accessoriesSmallImg,
  customizeDroneSmallImg,
} from '../../assets/catalog/index';
const categoryOfDrones = [
  {
    id: 1,
    title: 'Drones',
    href: '/',
    imagePath: dronesImg,
    smallImagePath: dronesSmallImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: '/',
    imagePath: accessoriesImg,
    smallImagePath: accessoriesSmallImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: '/',
    imagePath: customizeDroneImg,
    smallImagePath: customizeDroneSmallImg,
  },
];

export const CategoryOfDrones = () => {
  return (
    <section>
      <h1 className={c.main_title}>Catalog</h1>
      <div className={c.category_of_drones}>
        {categoryOfDrones?.map(category => (
          <div key={category?.id} className={c.category_of_drones__category}>
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