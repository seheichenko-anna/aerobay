import { FC } from 'react';
import s from './CustomPagination.module.css';

interface CustomPaginationProps {
  activeIndex: number;
  goToSlide: (index: number) => void;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  activeIndex,
  goToSlide,
}) => {
  return (
    <div className={s.custom_pagination}>
      <div className={s.pagination_dots}>
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index}
            className={`${s.pagination_dot} ${index === activeIndex ? s.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomPagination;
