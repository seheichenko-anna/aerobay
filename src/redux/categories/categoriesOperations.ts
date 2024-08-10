import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { dronesApi } from '../../axiosConfig/dronesApi';

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const fetchCategoriesThunk = createAsyncThunk<Category[]>(
  'fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('categories');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addCategoryThunk = createAsyncThunk<Category, Category>(
  'addCategory',
  async (category, thunkAPI) => {
    try {
      const response = await dronesApi.post('categories', category);
      thunkAPI.dispatch(fetchCategoriesThunk());
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk<Category, Category>(
  'deleteCategory',
  async (category, thunkAPI) => {
    try {
      await dronesApi.delete(`categories/${category.id}`);
      thunkAPI.dispatch(fetchCategoriesThunk());
      return category;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const editCategoryThunk = createAsyncThunk<Category, Category>(
  'editCategory',
  async (category, thunkAPI) => {
    try {
      const response = await dronesApi.put(
        `categories/${category.id}`,
        category
      );
      thunkAPI.dispatch(fetchCategoriesThunk());
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);
