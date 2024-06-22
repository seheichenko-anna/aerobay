import { configureStore } from '@reduxjs/toolkit';
import { accessoriesReducer } from './accessories/accessoriesSlice';

export const store = configureStore({
  reducer: {
    accessoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
