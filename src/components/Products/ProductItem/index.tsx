import { Link } from 'react-router-dom';
import c from '../Products.module.scss';

import ImageWithLoader from '../../ImageWithLoader';
import ItemBottom from './ItemBottom';
import ItemHeader from './ItemHeader';
import { BaseProduct } from '../../../redux/types';

const ProductItem = ({ product }: { product: BaseProduct }) => {
  return (
    <Link to={String(product.id)} key={product.id} className='product'>
      <article className={c['product-card']} data-id={product?.id}>
        <ItemHeader product={product} />

        <ImageWithLoader
          className="rounded-xl"
          src={product?.image_url.replace('dl=0', 'raw=1')}
          alt={product.description}
        />

        <ItemBottom product={product} />
      </article>
    </Link>
  );
};

export default ProductItem;
