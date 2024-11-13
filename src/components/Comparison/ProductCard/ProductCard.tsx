import imagePlaceholder from '../../../assets/placeholders/image-placeholder.png';
import { getPriceWithDiscount } from './getPriceWithDiscount';
import s from './ProductCard.module.css';
import svg from '../../../assets/sprite.svg';
import { Drone } from '../../../redux/drones/dronesOperations';
import { Subcategory } from '../../../redux/subcategories/subcategoriesOperations';
import { Tooltip } from 'react-tooltip';

interface ProductCardProps {
  item: Partial<Drone>;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const {
    title,
    price = 0,
    discount = 0,
    image_url,
    created_at,
    subcategories = [],
  } = item;

  const isNewItemByCreatedAt = (created_at: string = '') =>
    new Date(created_at) > new Date(2024, 9, 14);

  const getAvailabilityValue = (product: Subcategory[]) => {
    const availabilitySubcategory = product.find(
      subcategory => subcategory.name === 'Availability'
    );
    return availabilitySubcategory ? availabilitySubcategory.value : null;
  };
  return (
    <li className={s.product}>
      <div className={s.photo_wrapper}>
        <img
          src={
            image_url ? image_url.replace('dl=0', 'raw=1') : imagePlaceholder
          }
          alt={title}
          className={s.photo}
        />
        <button className={`${s.delete_btn} my-anchor-element`}>
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
          <li className={`${s.availability} ${s.img_label}`}>
            {getAvailabilityValue(subcategories)}
          </li>
        </ul>
      </div>
      <div className={s.product_info_wrapper}>
        <h2 className={s.product_title}>{title}</h2>
        <p className={s.price_wrapper}>
          {discount > 0 && (
            <span className={s.price_with_discount}>
              {`$ ${getPriceWithDiscount(price, discount).toLocaleString('uk-UA')}`}
            </span>
          )}
          <span
            className={discount > 0 ? s.full_price : s.price_with_discount}
          >{`$ ${price.toLocaleString('uk-UA')}`}</span>
        </p>

        <button className={s.add_to_cart}>
          <span>Add to cart</span>
          <span className={s.arrow_wrapper}>
            <svg className={s.icon_arrow_link}>
              <use xlinkHref={`${svg}#icon-arrow-up-right`} />
            </svg>
          </span>
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
