import c from './CategoryOfDrones.module.scss';

const categoryOfDrones = [
  {
    id: 1,
    title: 'Drones',
    href: '/',
    imagePath: './src/assets/catalog/category-of-drones/drone.png',
  },
  {
    id: 2,
    title: 'Accessories',
    href: '/',
    imagePath: './src/assets/catalog/category-of-drones/accessories.png',
  },
  {
    id: 3,
    title: 'Customize drone',
    href: '/',
    imagePath: './src/assets/catalog/category-of-drones/customize_drone.png',
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
