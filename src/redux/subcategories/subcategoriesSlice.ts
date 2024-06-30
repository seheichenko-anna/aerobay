import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchSubcategoriesThunk,
  addSubcategoryThunk,
  deleteSubcategoryThunk,
  editSubcategoryThunk,
  Subcategory,
} from './subcategoriesOperations';

interface SubcategoriesState {
  subcategories: Subcategory[];
}

const initialSubcategoriesState: SubcategoriesState = {
  subcategories: [],
};

const subcategoriesSlice = createSlice({
  name: 'subcategories',
  initialState: initialSubcategoriesState,
  reducers: {},
  selectors: {
    selectSubcategories: state => state.subcategories,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchSubcategoriesThunk.fulfilled,
        (state, { payload }: PayloadAction<Subcategory[]>) => {
          state.subcategories = payload;
        }
      )
      .addCase(
        addSubcategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Subcategory>) => {
          state.subcategories = [...state.subcategories, payload];
        }
      )
      .addCase(
        deleteSubcategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<{ id: number }>) => {
          state.subcategories = state.subcategories.filter(
            subcategory => subcategory.id !== payload.id
          );
        }
      )
      .addCase(
        editSubcategoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Subcategory>) => {
          const index = state.subcategories.findIndex(
            subcategory => subcategory.id === payload.id
          );
          if (index !== -1) {
            state.subcategories.splice(index, 1, payload);
          }
        }
      );
  },
});

export const subcategoriesReducer = subcategoriesSlice.reducer;
export const { selectSubcategories } = subcategoriesSlice.selectors;
