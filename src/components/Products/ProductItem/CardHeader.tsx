import { Tooltip } from 'react-tooltip';
import c from '../Products.module.scss';

import compareImg from '../../../assets/catalog/all-products/compare_arrow.svg';
import {
  addComparisonProduct,
  deleteComparisonProduct,
} from '../../../redux/comparisonProducts/comparisonProductsSlice';
import { Drone } from '../../../redux/drones/dronesOperations';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { BaseProduct } from '../../../redux/types';

const isNewItemByCreatedAt = (created_at: string) =>
  new Date(created_at) > new Date(2024, 9, 14);

const ItemHeader = ({ product }: { product: BaseProduct }) => {
  const dispatch = useAppDispatch();
  const comparisonProducts = useAppSelector(
    state => state.comparisonProducts.products,
  );

  const handleToggleCompare = () => {
    const isProductInComparisonState = comparisonProducts.some(
      comPro => comPro.id === product.id,
    );

    dispatch(
      isProductInComparisonState
        ? deleteComparisonProduct(product as Drone)
        : addComparisonProduct(product as Drone),
    );
  };

  return (
      <div className={c['product-card_top-section']}>
        <div className={`${c['product-card_badges']} pb-2`}>
          {isNewItemByCreatedAt(product.created_at) && (
            <div className={c['product-card_budge-new']}>New</div>
          )}

          {product.discount > 0 && (
            <div className={c['product-card_budge-Save']}>
              Save {product.discount}%
            </div>
          )}

          {product.subcategories.find(sub => sub.value === 'In Stock') && (
            <div className={c['product-card_budge-inStock']}>In Stock</div>
          )}
        </div>

        <div
          className={c['product-card_compare']}
          data-tooltip-id='compare-tooltip'
          data-tooltip-content='Compare'
          onClick={handleToggleCompare}
        >
          <img src={compareImg} alt='compare the product' />
        </div>

        <Tooltip id='compare-tooltip' place='left' />
      </div>
  );
};

export default ItemHeader;
