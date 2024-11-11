import {
  ChangeEvent,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import rangeStat from '../../../assets/catalog/sidebar/price_range_stat.svg';
import c from './FilterProduct.module.scss';
import { ProductFiltersContext } from '../../../pages/Catalog/CategoryProducts';

type PriceRangeProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PriceRange = forwardRef<HTMLInputElement, PriceRangeProps>(
  ({ onChange }, ref) => {
    const { minPrice, maxPrice, currentPriceRef } = useContext(
      ProductFiltersContext,
    )!;

    const [sliderValue, setSliderValue] = useState(currentPriceRef.current);

    const setProgress = (elTarget: HTMLInputElement) => {
      const elRangeBar = elTarget.parentElement as HTMLElement;
      const intThumbWidth = elRangeBar.clientHeight * 3;
      const intRangeBarWidth = elRangeBar.clientWidth - intThumbWidth;
      const intThumbWidthOffset = intThumbWidth / 2;

      const progressRatio =
        (+elTarget.value - +elTarget.min) / (+elTarget.max - +elTarget.min);
      const progressPosition =
        intRangeBarWidth * progressRatio + intThumbWidthOffset;

      elRangeBar.style.background = `linear-gradient(to right, #101828 ${progressPosition}px, #E4E6EA ${progressPosition}px)`;
    };

    const handleSliderChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const newValue = Number(event.target.value);
      currentPriceRef.current = newValue;
      setProgress(event.target);
      setSliderValue(newValue);

      if (onChange) {
        onChange(event);
      }
    };

    useEffect(() => {
      const inputElement = ref as React.RefObject<HTMLInputElement>;

      const handleInput = () => {
        if (inputElement.current) {
          setProgress(inputElement.current);
        }
      };

      if (inputElement.current) {
        inputElement.current.addEventListener('input', handleInput);
        setProgress(inputElement.current);
      }

      return () => {
        if (inputElement.current) {
          inputElement.current.removeEventListener('input', handleInput);
        }
      };
    }, [maxPrice, ref]);

    return (
      <div className={c.price_range}>
        <h3>Price range</h3>

        <div className={c.price_range__bgImage}>
          <img src={rangeStat} alt='range background image' />
          <div className={c.range}>
            <input
              type='range'
              min={minPrice}
              max={maxPrice}
              value={sliderValue}
              onChange={handleSliderChange}
              step={1}
              ref={ref}
            />
          </div>
        </div>

        <div className={c.price_range__minMaxPrices}>
          <p>$ {minPrice}</p>
          <p>$ {currentPriceRef.current}</p>
        </div>
      </div>
    );
  },
);
