import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const fetchCategoriesThunk = fetchThunk<Category[]>(
  'fetchCategories',
  'categories'
);
export const addCategoryThunk = addThunk<Category, Category>(
  'addCategory',
  'categories',
  fetchCategoriesThunk
);
export const deleteCategoryThunk = deleteThunk<{ id: number }, Category>(
  'deleteCategory',
  'categories',
  fetchCategoriesThunk
);
export const editCategoryThunk = editThunk<Category, Category>(
  'editCategory',
  'categories',
  fetchCategoriesThunk
);
