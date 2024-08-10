import { FC } from 'react';
import showMoreImg from '../../../assets/catalog/all-products/show_more.svg';

interface IButtonShowMoreProps {
  handleShowMore: any;
}

export const ButtonShowMore: FC<IButtonShowMoreProps> = ({
  handleShowMore,
}): JSX.Element => {
  return (
    <button className="show-more" onClick={handleShowMore}>
      <img src={showMoreImg} alt="show more picture" />
      <span> Show More</span>
    </button>
  );
};
