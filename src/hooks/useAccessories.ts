import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAccessoriesThunk } from '../redux/accessories/accessoriesOperations';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { RootState } from '../redux/store';

export default function useAccessories() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccessoriesThunk());
  }, [dispatch]);

  // const accessories = useAppSelector(selectAccessories);
  const accessories = useSelector((state: RootState) => state.accessories)

  return accessories;
}
