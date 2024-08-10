import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../../axiosConfig/dronesApi';

export interface Subcategory {
  id: number;
  name: string;
  value: string;
  group_id: number;
  category_id: number;
}

export const fetchSubcategoriesThunk = createAsyncThunk<Subcategory[]>(
  'fetchSubcategories',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('subcategory');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addSubcategoryThunk = createAsyncThunk<Subcategory, Subcategory>(
  'addSubcategory',
  async (subcategory, thunkAPI) => {
    try {
      const response = await dronesApi.post('subcategory', subcategory);
      thunkAPI.dispatch(fetchSubcategoriesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const deleteSubcategoryThunk = createAsyncThunk<
  Subcategory,
  Subcategory
>('deleteSubcategory', async (subcategory, thunkAPI) => {
  try {
    await dronesApi.delete(`subcategory/${subcategory.id}`);
    thunkAPI.dispatch(fetchSubcategoriesThunk());
    return subcategory;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});

export const editSubcategoryThunk = createAsyncThunk<Subcategory, Subcategory>(
  'editSubcategory',
  async (subcategory, thunkAPI) => {
    try {
      const response = await dronesApi.put(
        `subcategory/${subcategory.id}`,
        subcategory
      );
      thunkAPI.dispatch(fetchSubcategoriesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);
