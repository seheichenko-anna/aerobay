import { Link } from 'react-router-dom';
import styles from '../Products.module.scss';

import ImageWithLoader from '../../ImageWithLoader';
import CardHeader from './CardHeader';
import CardBottom from './CardBottom';
import { BaseProduct } from '../../../redux/types';

const ProductItem = ({ product }: { product: BaseProduct }) => {
  return (
    <article className={styles['product-card']} data-id={product?.id}>
      <CardHeader product={product} />

      <Link
        to={String(product.id)}
        key={product.id}
        className='product h-full w-full flex flex-col justify-center'
      >
        <div className='h-full flex flex-col justify-between'>
          <ImageWithLoader
            className='rounded-3xl'
            src={product?.image_url.replace('dl=0', 'raw=1')}
            alt={'Product Image'}
          />

          <CardBottom product={product} />
        </div>
      </Link>
    </article>
  );
};

export default ProductItem;
