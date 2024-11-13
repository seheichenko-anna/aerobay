import { BounceLoader } from 'react-spinners';
import { BaseProduct } from '../../redux/types';
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

  return (
    <>
      <div className={styles['all-products']}>
        {products.map(product => (
          <ProductItem key={product.id + product.title} product={product} />
        ))}
      </div>

      {/*  TODO: make show more work again! */}
      {/* <ButtonShowMore handleShowMore={handleShowMore} /> */}
    </>
  );
};

export default ProductList;
