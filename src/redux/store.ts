import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'comparison',
  storage,
  whitelist: ['comparisonProducts'],
};

const rootReducer = combineReducers({
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
