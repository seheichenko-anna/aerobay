import { configureStore } from '@reduxjs/toolkit';
import { accessoriesReducer } from './accessories/accessoriesSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { comparisonProductsReducer } from './comparisonProducts/comparisonProductsSlice';
import { dronesReducer } from './drones/dronesSlice';
import { errorReducer } from './errorSlice';
import { filtersReducer } from './filtersSlice';
import { imagesReducer } from './images/imagesSlice';
import { groupsForDronesReducer } from './groupsForDrones/groupsForDronesSlice';
import { loadingReducer } from './loadingSlice';
import { manufacturesReducer } from './manufacturers/manufacturersSlice';
import { subcategoriesReducer } from './subcategories/subcategoriesSlice';

export const store = configureStore({
  reducer: {
    accessories: accessoriesReducer,
    manufacturers: manufacturesReducer,
    categories: categoriesReducer,
    groupsForDrones: groupsForDronesReducer,
    subcategories: subcategoriesReducer,
    drones: dronesReducer,
    loading: loadingReducer,
    error: errorReducer,
    comparisonProducts: comparisonProductsReducer,
    images: imagesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
