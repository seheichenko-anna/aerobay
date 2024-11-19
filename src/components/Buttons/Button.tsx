import classNames from 'classnames';
import s from './Button.module.css';
import svg from '../../assets/sprite.svg';

interface ButtonProps {
  variant?: 'with_arrow_btn' | 'white_btn';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon: boolean;
  size?: 'small' | 'medium' | 'large';
  modal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'with_arrow_btn',
  disabled = false,
  onClick,
  children,
  icon,
  size = 'medium',
  modal = false,
}) => {
  return (
    <button
      className={classNames(
        s.button,
        s[variant],
        s[`${variant}_${size}`],
        s[`${modal && 'modal'}`],
        {
          [s.disabled]: disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={s.content}>{children}</span>
      {icon && (
        <span className={s.arrow_wrapper}>
          <svg className={s.icon_arrow_link}>
            <use xlinkHref={`${svg}#icon-arrow-up-right`} />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;
