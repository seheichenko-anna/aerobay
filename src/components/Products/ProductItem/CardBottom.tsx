import c from '../Products.module.scss';
import { BaseProduct } from '../../../redux/types';

const ItemBottom = ({ product }: { product: BaseProduct }) => {
  const ItemPrice = () => {
    if (product.discount) {
      const newPrice =
        product.price - product.price * (product.discount / 100);

      return (
        <div className={c['product-card_price']}>
          <span>$ {newPrice}</span>
          <del>$ {product.price}</del>
        </div>
      );
    }

    return (
      <div className={c['product-card_price']}>
        <span>$ {product.price}</span>
      </div>
    );
  };

  return (
    <div className={c['product-card_bottom-section']}>
      <h3 className={c['product-card_title']}>{product?.title}</h3>

      <ItemPrice />

      {/* {product?.hasColorGroups && ( */}
      {/*   <> */}
      {/*     <div className={c['product-card_color-groups']}> */}
      {/*       <p data-tooltip-id='yellow-tooltip' data-tooltip-content='Yellow'> */}
      {/*         <p> */}
      {/*           <div></div> */}
      {/*         </p> */}
      {/*       </p> */}
      {/**/}
      {/*       <p data-tooltip-id='green-tooltip' data-tooltip-content='Green'> */}
      {/*         <p data-tooltip-id='green-tooltip' data-tooltip-content='Green'> */}
      {/*           <div></div> */}
      {/*         </p> */}
      {/*       </p> */}
      {/**/}
      {/*       <p */}
      {/*         data-tooltip-id='light-blue-tooltip' */}
      {/*         data-tooltip-content='Light Blue' */}
      {/*       > */}
      {/*         <p> */}
      {/*           <div></div> */}
      {/*         </p> */}
      {/*       </p> */}
      {/*     </div> */}
      {/**/}
      {/*     <Tooltip id='yellow-tooltip' place='top' /> */}
      {/*     <Tooltip id='green-tooltip' place='top' />{' '} */}
      {/*     <Tooltip id='light-blue-tooltip' place='top' /> */}
      {/*   </> */}
      {/* )} */}
    </div>
  );
};

export default ItemBottom;
