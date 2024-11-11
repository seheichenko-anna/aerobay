import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCategoriesThunk,
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
  Category,
} from './categoriesOperations';

interface CategoriesState {
  categories: Category[];
}

const initialCategoriesState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {},
  selectors: {
    selectCategories: state => state.categories,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCategoriesThunk.fulfilled,
        (state, { payload }: PayloadAction<Category[]>) => {
          state.categories = payload;
        },
      )
      .addCase(
        addCategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Category>) => {
          state.categories = [...state.categories, payload];
        },
      )
      .addCase(
        deleteCategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Category>) => {
          state.categories = state.categories.filter(
            category => category.id !== payload.id,
          );
        },
      )
      .addCase(
        editCategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Category>) => {
          const index = state.categories.findIndex(
            category => category.id === payload.id,
          );
          state.categories.splice(index, 1, payload);
        },
      );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { selectCategories } = categoriesSlice.selectors;
