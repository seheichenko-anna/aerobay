import { useEffect } from 'react';
import { fetchCategoriesThunk } from '../redux/categories/categoriesOperations';
import { selectCategories } from '../redux/categories/categoriesSlice';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { useAppSelector } from '../redux/hooks/useAppSelector';

export default () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const categories = useAppSelector(selectCategories);

  return categories;
}
