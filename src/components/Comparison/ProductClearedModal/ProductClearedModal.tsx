import { Link } from 'react-router-dom';
import svg from '../../../assets/sprite.svg';
import Button from '../../Buttons/Button';
import s from './ProductClearedModal.module.css';

interface ProductClearedModalProps {
  closeModal: () => void;
}

const ProductClearedModal: React.FC<ProductClearedModalProps> = () => {
  return (
    <div className={s.modal_wrapper}>
      <div className={s.icon_wrapper_second}>
        <div className={s.icon_wrapper_first}>
          <svg
            className={s.trash}
            aria-label="trash icon"
            width="18"
            height="20"
          >
            <use xlinkHref={`${svg}#icon-trash`} />
          </svg>
        </div>
      </div>
      <h2 className={s.modal_title}>Product comparison cleared</h2>
      <p className={s.modal_info}>
        All products have been removed from the comparison list.
      </p>
      <div className={s.links_wrapper}>
        <Link to="/catalog" className={s.link_modal}>
          <Button icon={false} variant="white_btn" size="medium" modal>
            Continue shopping
          </Button>
        </Link>
        <Link to="/cart" className={s.link_modal}>
          <Button icon modal>
            Go to cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductClearedModal;
