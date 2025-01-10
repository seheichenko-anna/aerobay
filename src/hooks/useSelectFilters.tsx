import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default () => {
  const filters = useSelector((state: RootState) => state.filters);

  return filters;
};
