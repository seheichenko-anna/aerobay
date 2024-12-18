import imagePlaceholder from '../../../assets/placeholders/image-placeholder.png';
import { getPriceWithDiscount } from './getPriceWithDiscount';
import s from './ProductCard.module.css';
import svg from '../../../assets/sprite.svg';
import { Drone } from '../../../redux/drones/dronesOperations';
import { Subcategory } from '../../../redux/subcategories/subcategoriesOperations';
import { Tooltip } from 'react-tooltip';
import Button from '../../Buttons/Button';
import { Accessory } from '../../../redux/accessories/accessoriesOperations';
import { useDashboard } from '../../../hooks/useDashboard';

interface ProductCardProps {
  item: Partial<Drone> | Partial<Accessory>;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onDelete }) => {
  const {
    title,
    price = 0,
    discount = 0,
    image_url,
    created_at,
    subcategories = [],
  } = item;

  const { isAllMobile } = useDashboard();

  const isNewItemByCreatedAt = (created_at: string = '') =>
    new Date(created_at) > new Date(2024, 9, 14);

  const getAvailabilityValue = (product: Subcategory[]) => {
    const availabilitySubcategory = product.find(
      subcategory => subcategory.name === 'Availability'
    );
    return availabilitySubcategory ? availabilitySubcategory.value : null;
  };

  return (
    <div className={s.product}>
      <div className={s.photo_wrapper}>
        <img
          src={
            image_url ? image_url.replace('dl=0', 'raw=1') : imagePlaceholder
          }
          alt={title}
          className={`${s.photo} ${getAvailabilityValue(subcategories) === 'Out of Stock' ? s.out_of_stock : ''}`}
        />
        <button
          className={`${s.delete_btn} my-anchor-element`}
          onClick={onDelete}
        >
          <svg
            className={s.trash}
            aria-label="trash icon"
            width="18"
            height="20"
          >
            <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </button>
        <Tooltip anchorSelect=".my-anchor-element" place="left">
          Delete
        </Tooltip>
        <ul className={s.img_labels}>
          {isNewItemByCreatedAt(created_at) && (
            <li className={`${s.new_product} ${s.img_label}`}>New</li>
          )}
          {discount > 0 && (
            <li
              className={`${s.discount} ${s.img_label}`}
            >{`Save ${discount}%`}</li>
          )}
          {getAvailabilityValue(subcategories) && (
            <li className={`${s.availability} ${s.img_label}`}>
              {getAvailabilityValue(subcategories)}
            </li>
          )}
        </ul>
      </div>
      <div className={s.product_info_wrapper}>
        <h2
          className={`${s.product_title} ${getAvailabilityValue(subcategories) === 'Out of Stock' ? s.text_out_of_stock : ''}`}
        >
          {title}
        </h2>
        <p
          className={`${s.price_wrapper} ${getAvailabilityValue(subcategories) === 'Out of Stock' ? s.text_out_of_stock : ''}`}
        >
          {discount > 0 && (
            <span className={s.price_with_discount}>
              {`$ ${getPriceWithDiscount(price, discount).toLocaleString('uk-UA')}`}
            </span>
          )}
          <span
            className={discount > 0 ? s.full_price : s.price_with_discount}
          >{`$ ${price.toLocaleString('uk-UA')} `}</span>
          <span>
            {getAvailabilityValue(subcategories) === 'Out of Stock'
              ? 'Not Available'
              : ''}
          </span>
        </p>

        <Button
          disabled={getAvailabilityValue(subcategories) === 'Out of Stock'}
          icon
          size={isAllMobile ? 'small' : 'medium'}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
