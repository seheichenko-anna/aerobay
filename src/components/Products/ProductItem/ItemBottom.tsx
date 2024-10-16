import { Tooltip } from 'react-tooltip';
import { IProduct } from '../types';
import c from '../Products.module.scss';

const ItemBottom = ({ product }: { product: IProduct }) => (
  <div className={c['product-card_bottom-section']}>
    <h3 className={c['product-card_title']}>{product?.title}</h3>

    <div className={c['product-card_price']}>
      <span>$ {product.price}</span>
      {/* <span>$ {product.newPrice}</span> */}
      {/* <del>{product.oldPrice}</del> */}
    </div>

    {product?.hasColorGroups && (
      <>
        <div className={c['product-card_color-groups']}>
          <p data-tooltip-id='yellow-tooltip' data-tooltip-content='Yellow'>
            <p>
              <div></div>
            </p>
          </p>

          <p data-tooltip-id='green-tooltip' data-tooltip-content='Green'>
            <p data-tooltip-id='green-tooltip' data-tooltip-content='Green'>
              <div></div>
            </p>
          </p>

          <p
            data-tooltip-id='light-blue-tooltip'
            data-tooltip-content='Light Blue'
          >
            <p>
              <div></div>
            </p>
          </p>
        </div>
        <Tooltip id='yellow-tooltip' place='top' />
        <Tooltip id='green-tooltip' place='top' />{' '}
        <Tooltip id='light-blue-tooltip' place='top' />
      </>
    )}
  </div>
);

export default ItemBottom;
