import { configureStore } from '@reduxjs/toolkit';
import { accessoriesReducer } from './accessories/accessoriesSlice';
import { manufacturesReducer } from './manufacturers/manufacturersSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { groupsForDronesReducer } from './groupsForDrones/groupsForDronesSlice';
import { subcategoriesReducer } from './subcategories/subcategoriesSlice';
import { dronesReducer } from './drones/dronesSlice';
import { loadingReducer } from './loadingSlice';
import { errorReducer } from './errorSlice';

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
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
