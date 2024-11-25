import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { fetchSubcategoriesThunk } from '../redux/subcategories/subcategoriesOperations';
import { selectSubcategories } from '../redux/subcategories/subcategoriesSlice';

export default () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubcategoriesThunk());
  }, [dispatch]);

  const subcategories = useAppSelector(selectSubcategories);

  return subcategories;
};
