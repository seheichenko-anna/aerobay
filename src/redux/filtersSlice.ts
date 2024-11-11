import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ProductFilter,
  ProductFilterOption,
} from '../components/Products/Sidebar';
import {
  fetchSubcategoriesThunk,
  Subcategory,
} from './subcategories/subcategoriesOperations';
import { CategoryTabType } from '../components/Categories/categoryTabs';

interface FiltersState {
  allFilterGroups: ProductFilter[];
  currentFilterGroups: ProductFilter[];
  loading: boolean;
}

const initialState: FiltersState = {
  allFilterGroups: [],
  currentFilterGroups: [],
  loading: true,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterGroups(state, action: PayloadAction<ProductFilter[]>) {
      state.allFilterGroups = action.payload;
    },

    setCurrentCategory(state, action: PayloadAction<CategoryTabType>) {
      state.currentFilterGroups = state.allFilterGroups.filter(
        group => group.category === action.payload,
      );
    },

    toggleOption(
      state,
      action: PayloadAction<ProductFilterOption & { title: string }>,
    ) {
      const { label, title } = action.payload;

      if (state.allFilterGroups.length === 0) {
        return;
      }

      const filterGroup = state.currentFilterGroups.find(
        group => group.title === title,
      );

      if (filterGroup) {
        const option = filterGroup.options.find(opt => opt.label === label);

        if (option) {
          option.checked = !option.checked;
        }
      }
    },

    resetFilters(state) {
      state.currentFilterGroups.forEach(group => {
        group.options.forEach(option => {
          option.checked = false;
        });
      });
    },
  },

  extraReducers: builder => {
    builder.addCase(
      fetchSubcategoriesThunk.fulfilled,
      (state, { payload }: PayloadAction<Subcategory[]>) => {
        const groups = payload.reduce(groupSubcategoriesIntoFilters, []);

        state.allFilterGroups = groups;
        state.loading = false;
      },
    );
  },
});

const groupSubcategoriesIntoFilters = (
  acc: ProductFilter[],
  sub: Subcategory,
): ProductFilter[] => {
  const categoryName = sub.category ? sub.category.name : 'All Products';
  const group = acc.find(
    gr => gr.title === sub.name && gr.category === categoryName,
  );

  const newOption = { label: sub.value, checked: false };

  if (!group) {
    acc.push({
      category: categoryName as CategoryTabType,
      title: sub.name,
      options: [newOption],
    });
  } else {
    group.options.push(newOption);
  }

  return acc;
};

export const {
  setFilterGroups,
  toggleOption,
  setCurrentCategory,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
