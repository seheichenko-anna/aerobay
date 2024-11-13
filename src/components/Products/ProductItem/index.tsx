import { Link } from 'react-router-dom';
import styles from '../Products.module.scss';

import ImageWithLoader from '../../ImageWithLoader';
import CardHeader from './CardHeader';
import CardBottom from './CardBottom';
import { BaseProduct } from '../../../redux/types';

const ProductItem = ({ product }: { product: BaseProduct }) => {
  return (
    <Link to={String(product.id)} key={product.id} className='product'>
      <article className={styles['product-card']} data-id={product?.id}>
        <CardHeader product={product} />

        <ImageWithLoader
          className="rounded-3xl"
          src={product?.image_url.replace('dl=0', 'raw=1')}
          alt={'Product Image'}
        />

        <CardBottom product={product} />
      </article>
    </Link>
  );
};

export default ProductItem;
