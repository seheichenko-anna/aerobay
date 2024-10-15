import { ChangeEvent, forwardRef, useEffect } from 'react';
import rangeStat from '../../../assets/catalog/sidebar/price_range_stat.svg'
import c from './FilterProduct.module.scss';

type PriceRangeProps = {
  minPrice: number;
  maxPrice: {
    isTrigged: boolean;
    price: number;
    value: number;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  refInput: React.Ref<HTMLInputElement>;
};

export const PriceRange = forwardRef<HTMLInputElement, PriceRangeProps>(
  ({ minPrice, maxPrice, onChange, refInput }, ref) => {
    const minPriceWithDot = `${String(minPrice).slice(0, -3)}.${String(minPrice).slice(-3)}`;
    const currentValue = !maxPrice.isTrigged ? maxPrice.value - 10 : maxPrice.value;
    const maxPriceWithDot = !maxPrice.isTrigged
      ? `${String(maxPrice.price - 20000).slice(0, -3)}.${String(maxPrice.price - 20000).slice(-3)}`
      : `${String(maxPrice.price).slice(0, -3)}.${String(maxPrice.price).slice(-3)}`;

    const setProgress = (elTarget: HTMLInputElement) => {
      const elRangeBar = elTarget.parentElement as HTMLElement;
      const intThumbWidth = elRangeBar.clientHeight * 3;
      const intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
      const intThumbWidthOffset = intThumbWidth / 2;

      const intProgressPosition =
        (+elTarget.value - +elTarget.min) / (+elTarget.max - +elTarget.min);
      const intRangePosition =
        intRangeBarWidth * intProgressPosition + intThumbWidthOffset;

      elRangeBar.style.background =
        `linear-gradient(to right, #101828 ${intRangePosition}px, #E4E6EA ${intRangePosition}px)`;
    };

    useEffect(() => {
      const inputElement = refInput as React.RefObject<HTMLInputElement>;

      const handleInput = () => {
        if (inputElement.current) {
          setProgress(inputElement.current);
        }
      };

      if (inputElement.current) {
        inputElement.current.addEventListener('input', handleInput);
        setProgress(inputElement.current); // Set the progress bar initially
      }

      // Clean up event listener on unmount
      return () => {
        if (inputElement.current) {
          inputElement.current.removeEventListener('input', handleInput);
        }
      };
    }, [maxPrice, refInput]);

    return (
      <div className={c.price_range}>
        <h3>Price range</h3>
        <div className={c.price_range__bgImage}>
          <img src={rangeStat} alt="range background image" />
          <div className={c.range}>
            <input
              type="range"
              min={4}
              max={100}
              value={currentValue}
              onChange={onChange}
              step={1}
              ref={refInput} // Set the input reference here
            />
          </div>
        </div>
        <div className={c.price_range__minMaxPrices}>
          <p>$ {minPriceWithDot}</p>
          <p>$ {maxPriceWithDot}</p>
        </div>
      </div>
    );
  }
);
