import imagePlaceholder from '../../../assets/placeholders/image-placeholder.png';
import { getPriceWithDiscount } from './getPriceWithDiscount';
import s from './ProductCard.module.css';
import svg from '../../../assets/sprite.svg';

interface ProductCardProps {
  item: {
    title: string;
    price: number;
    discount: number;
    photo: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { title, price, discount, photo } = item;
  return (
    <li className={s.product}>
      <div className={s.photo_wrapper}>
        <img
          src={photo ? photo : imagePlaceholder}
          alt={title}
          className={s.photo}
        />
        <button className={s.delete_btn}>
          <svg
            className={s.trash}
            aria-label="trash icon"
            width="18"
            height="20"
          >
            <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </button>
      </div>
      <div className={s.product_info_wrapper}>
        <h2 className={s.product_title}>{title}</h2>
        <div className={s.price_wrapper}>
          <p>
            {discount > 0 && (
              <span className={s.price_with_discount}>
                {`$ ${getPriceWithDiscount(price, discount).toLocaleString('uk-UA')}`}
              </span>
            )}
            <span
              className={discount > 0 ? s.full_price : s.price_with_discount}
            >{`$ ${price.toLocaleString('uk-UA')}`}</span>
          </p>
          <button className={s.cart_btn}>
            <svg
              className={s.cart}
              aria-label="cart icon"
              width="18"
              height="20"
            >
              <use xlinkHref={`${svg}#icon-cart`} />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
