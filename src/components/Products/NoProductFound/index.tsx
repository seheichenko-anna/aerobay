import { useContext } from 'react';
import { ProductFiltersContext } from '../../../pages/Catalog/CategoryProducts';
import LoupeIcon from './LoupeIcon';
import styles from './styles.module.scss';
import { resetFilters } from '../../../redux/filtersSlice';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';

export default () => {
  const { clearFilters } = useContext(ProductFiltersContext)!

  const dispatch = useAppDispatch();
  const clearAll = () => {
    clearFilters();
    dispatch(resetFilters());
  };

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <LoupeIcon />

      <h3 className='py-4 font-bold text-2xl leading-7 text-[#181D27]'>No products found</h3>

      <p className='pb-12 text-lg max-w-sm text-center text-[#535862]'>
        Try changing your filter parameters or use search for more precise
        results.
      </p>

      <button className={styles['button-lime']} onClick={clearAll}>
        <span>Clear all filters</span>

        <span className={styles['icon-wrapper']}>
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_1622_3954)'>
              <path
                className={styles['svg-icon']}
                d='M0.833252 4.13019V9.13019M0.833252 9.13019H5.83325M0.833252 9.13019L4.69992 5.49686C5.59554 4.60078 6.70356 3.9462 7.92059 3.59417C9.13762 3.24214 10.424 3.20415 11.6597 3.48374C12.8954 3.76333 14.0401 4.35138 14.987 5.19304C15.934 6.03469 16.6523 7.10251 17.0749 8.29686M19.1666 17.4635V12.4635M19.1666 12.4635H14.1666M19.1666 12.4635L15.2999 16.0969C14.4043 16.9929 13.2963 17.6475 12.0792 17.9995C10.8622 18.3516 9.57584 18.3896 8.34016 18.11C7.10447 17.8304 5.95975 17.2423 5.01281 16.4007C4.06586 15.559 3.34756 14.4912 2.92492 13.2969'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_1622_3954'>
                <rect
                  width='20'
                  height='20'
                  fill='white'
                  transform='translate(0 0.796875)'
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </div>
  );
};
