import { useReducer, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { BaseProduct } from '../../redux/types';
import { ButtonShowMore } from './ButtonShowMore';
import NoProductFound from './NoProductFound';
import { Pagination } from './Pagination';
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
    return <NoProductFound />;
  }

  const SHOW_LIMIT = 9;
  const [showMoreLimit, increaseShowMoreLimit] = useReducer(
    state => state + SHOW_LIMIT,
    SHOW_LIMIT,
  );

  const shouldShowMoreBtn = products.length >= showMoreLimit;

  const pageCount = Math.ceil(products.length / showMoreLimit);
  const [offset, setOffset] = useState(0);
  const endOffset = offset + showMoreLimit;

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * SHOW_LIMIT) % products.length;
    setOffset(newOffset);
  };

  return (
    <>
      <div className={styles['all-products']}>
        {products.slice(offset, endOffset).map(product => (
          <ProductItem key={product.id + product.title} product={product} />
        ))}
      </div>

      {shouldShowMoreBtn && (
        <ButtonShowMore handleShowMore={increaseShowMoreLimit} />
      )}

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default ProductList;
