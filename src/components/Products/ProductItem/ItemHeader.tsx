import { Tooltip } from 'react-tooltip';
import c from '../Products.module.scss';
import { IProduct } from '../types';

import compareImg from '../../../assets/catalog/all-products/compare_arrow.svg';

const ItemHeader = ({ product }: { product: IProduct }) => (
  <div className={c['product-card_img-section']}>
    <div className={c['product-card_top-section']}>
      <div className={c['product-card_badges']}>
        {product.isNew && (
          <div className={c['product-card_budge-new']}>New</div>
        )}
        {product.isInStock && (
          <div className={c['product-card_budge-inStock']}>In Stock</div>
        )}
      </div>

      <div
        className={c['product-card_compare']}
        data-tooltip-id='compare-tooltip'
        data-tooltip-content='Compare'
      >
        <img src={compareImg} alt='compare the product' />
      </div>

      <Tooltip id='compare-tooltip' place='left' />
    </div>
  </div>
);

export default ItemHeader;
