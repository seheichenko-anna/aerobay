import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface Subcategory {
  id: number;
  name: string;
  value: string;
}

export const fetchSubcategoriesThunk = fetchThunk<Subcategory[]>(
  'fetchSubcategories',
  'subcategory'
);

export const addSubcategoryThunk = addThunk<Subcategory, Subcategory>(
  'addSubcategory',
  'subcategory',
  fetchSubcategoriesThunk
);

export const deleteSubcategoryThunk = deleteThunk<{ id: number }, Subcategory>(
  'deleteSubcategory',
  'subcategory',
  fetchSubcategoriesThunk
);

export const editSubcategoryThunk = editThunk<Subcategory, Subcategory>(
  'editSubcategory',
  'subcategory',
  fetchSubcategoriesThunk
);
