import { createAsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../../axiosConfig/dronesApi';
import { AxiosError } from 'axios';
import { BaseProduct } from '../types';

export interface Accessory extends BaseProduct {
  dimensions: string;
  weight: string;
  type: string;
  category_id: number;
}

export const fetchAccessoriesThunk = createAsyncThunk<Accessory[]>(
  'fetchAccessories',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('accessories');
      return response.data.accessories;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addAccessoryThunk = createAsyncThunk<Accessory, Accessory>(
  'addAccessory',
  async (accessory, thunkAPI) => {
    try {
      const response = await dronesApi.post('accessories', accessory);
      thunkAPI.dispatch(fetchAccessoriesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const deleteAccessoryThunk = createAsyncThunk<Accessory, Accessory>(
  'deleteAccessory',
  async (accessory, thunkAPI) => {
    try {
      await dronesApi.delete(`accessories/${accessory.id}`);
      thunkAPI.dispatch(fetchAccessoriesThunk());
      return accessory;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const editAccessoryThunk = createAsyncThunk<Accessory, Accessory>(
  'editAccessory',
  async (accessory, thunkAPI) => {
    try {
      const response = await dronesApi.put(
        `accessories/${accessory.id}`,
        accessory
      );
      thunkAPI.dispatch(fetchAccessoriesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);
