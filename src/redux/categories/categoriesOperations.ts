import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

interface Category {
  id: string;
  name: string;
}

export const fetchCategoriesThunk = fetchThunk<Category[]>(
  'fetchCategories',
  'categories'
);
export const addCategoryThunk = addThunk<Category, Category>(
  'addCategory',
  'categories'
);
export const deleteCategoryThunk = deleteThunk<{ id: string }, Category>(
  'deleteCategory',
  'categories'
);
export const editCategoryThunk = editThunk<Category, Category>(
  'editCategory',
  'categories'
);
