<<<<<<< HEAD
import c from './CategoryOfDrones.module.scss';
import dronesImg from '../../assets/catalog/category-of-drones/drone.png';
import accessoriesImg from '../../assets/catalog/category-of-drones/accessories.png';
import customizeDroneImg from '../../assets/catalog/category-of-drones/customize_drone.png';

const categoryOfDrones = [
  {
    id: 1,
    title: 'Drones',
    href: '/',
    imagePath: dronesImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: '/',
    imagePath: accessoriesImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: '/',
    imagePath: customizeDroneImg,
  },
];

export const CategoryOfDrones = () => {
  return (
    <>
      <h1 className={c.main_title}>Catalog</h1>
      <div className={c.category_of_drones}>
        {categoryOfDrones?.map(category => (
          <div key={category?.id} className={c.category_of_drones__category}>
            <img src={category?.imagePath} alt={category?.title} />
            <p>{category?.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
=======
import c from './CategoryOfDrones.module.scss';
import dronesImg from '../../assets/catalog/category-of-drones/drone.png';
import accessoriesImg from '../../assets/catalog/category-of-drones/accessories.png';
import customizeDroneImg from '../../assets/catalog/category-of-drones/customize_drone.png';

const categoryOfDrones = [
  {
    id: 1,
    title: 'Drones',
    href: '/',
    imagePath: dronesImg,
  },
  {
    id: 2,
    title: 'Accessories',
    href: '/',
    imagePath: accessoriesImg,
  },
  {
    id: 3,
    title: 'Customize drone',
    href: '/',
    imagePath: customizeDroneImg,
  },
];

export const CategoryOfDrones = () => {
  return (
    <>
      <h1 className={c.main_title}>Catalog</h1>
      <div className={c.category_of_drones}>
        {categoryOfDrones?.map(category => (
          <div key={category?.id} className={c.category_of_drones__category}>
            <img src={category?.imagePath} alt={category?.title} />
            <p>{category?.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
>>>>>>> 417c19ce9714f6804ae3448ba1b13a43c7389da3
