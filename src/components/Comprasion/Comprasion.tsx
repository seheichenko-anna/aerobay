import { Breadcrumbs } from '../Breadcrumbs';
import ProductCard from './ProductCard/ProductCard';
import s from './Comprasion.module.css';

const Comprasion = () => {
  const comprasionProducts = [
    { title: 'LIDAR Drone 200 IO', price: 12500, discount: 20, photo: '' },
    { title: 'LIDAR Drone 2500 AM', price: 17000, discount: 0, photo: '' },
    { title: 'LIDAR Drone 3100 PR', price: 30000, discount: 10, photo: '' },
    { title: 'LIDAR Drone 480 SM', price: 9800, discount: 0, photo: '' },
  ];

  return (
    <>
      <Breadcrumbs />
      <h1 className={s.title}>Comparison</h1>
      <ul className={s.products_list}>
        {comprasionProducts.map(item => (
          <ProductCard item={item} />
        ))}
      </ul>
    </>
  );
};

export default Comprasion;
