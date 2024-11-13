import { useReducer } from 'react';
import { BounceLoader } from 'react-spinners';
import { BaseProduct } from '../../redux/types';
import { ButtonShowMore } from './ButtonShowMore';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const ProductList = ({
  products,
  loading,
}: {
  products: BaseProduct[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div className='flex justify-center'>
        <BounceLoader size={50} color='#a8a8a8' />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className='flex justify-center'>
        <p>No items found.</p>
      </div>
    );
  }

  const SHOW_LIMIT = 9;
  const [showMoreLimit, increaseShowMoreLimit] = useReducer(
    state => state + SHOW_LIMIT,
    SHOW_LIMIT,
  );

  const shouldShowMoreBtn = products.length >= showMoreLimit;

  return (
    <>
      <div className={styles['all-products']}>
        {products.slice(0, showMoreLimit).map(product => (
          <ProductItem key={product.id + product.title} product={product} />
        ))}
      </div>

      {shouldShowMoreBtn && (
        <ButtonShowMore handleShowMore={increaseShowMoreLimit} />
      )}
    </>
  );
};

export default ProductList;
