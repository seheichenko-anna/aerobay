import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { dronesApi } from '../../axiosConfig/dronesApi';

export interface Manufacturer {
  id: number;
  name: string;
}

export const fetchManufacturersThunk = createAsyncThunk<Manufacturer[]>(
  'fetchManufacturers',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('manufactures');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addManufacturerThunk = createAsyncThunk<
  Manufacturer,
  Manufacturer
>('addManufacturer', async (manufacturer, thunkAPI) => {
  try {
    const response = await dronesApi.post('manufactures', manufacturer);
    thunkAPI.dispatch(fetchManufacturersThunk());
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});

export const deleteManufacturerThunk = createAsyncThunk<
  Manufacturer,
  Manufacturer
>('deleteManufacturer', async (manufacturer, thunkAPI) => {
  try {
    await dronesApi.delete(`manufactures/${manufacturer.id}`);
    thunkAPI.dispatch(fetchManufacturersThunk());
    return manufacturer;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});

export const editManufacturerThunk = createAsyncThunk<
  Manufacturer,
  Manufacturer
>('editManufacturer', async (manufacturer, thunkAPI) => {
  try {
    const response = await dronesApi.put(
      `manufactures/${manufacturer.id}`,
      manufacturer
    );
    thunkAPI.dispatch(fetchManufacturersThunk());
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});
