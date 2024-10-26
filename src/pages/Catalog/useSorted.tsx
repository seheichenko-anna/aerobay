import { BaseProduct } from '../../redux/types';
import { SortByItems } from './sortByItems';
import { useSort } from './SortProvider';

const useSorted = (products: BaseProduct[]) => {
  const { currentSort } = useSort()!;
  return products.slice().sort(sortItemsByPrice(currentSort));
};

const sortItemsByPrice =
  (sortType: SortByItems) => (item1: BaseProduct, item2: BaseProduct) => {
    if (sortType === 'Low To High') {
      return item1.price - item2.price;
    }

    if (sortType === 'High To Low') {
      return item2.price - item1.price;
    }

    if (sortType === 'New') {
      return (
        Number(new Date(item2.created_at)) - Number(new Date(item1.created_at))
      );
    }

    if (sortType === 'Sale') {
      return item2.discount - item1.discount;
    }

    return 0;
  };

export default useSorted;
