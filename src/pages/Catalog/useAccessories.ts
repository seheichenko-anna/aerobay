import { useEffect } from 'react';
import { fetchAccessoriesThunk } from '../../redux/accessories/accessoriesOperations';
import { selectAccessories } from '../../redux/accessories/accessoriesSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

export default function useAccessories() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccessoriesThunk());
  }, [dispatch]);

  const accessories = useAppSelector(selectAccessories);

  return accessories;
}
