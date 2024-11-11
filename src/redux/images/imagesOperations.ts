import { createAsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../../axiosConfig/dronesApi';
import { AxiosError } from 'axios';

export interface Image {
  id: number;
  name: string;
  url: string;
}

export const fetchImagesThunk = createAsyncThunk<Image[]>(
  'fetchImages',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('images');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addImageThunk = createAsyncThunk<Image, Image>(
  'addImage',
  async (image, thunkAPI) => {
    try {
      const response = await dronesApi.post('images', image);
      thunkAPI.dispatch(fetchImagesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const deleteImageThunk = createAsyncThunk<Image, Image>(
  'deleteImage',
  async (image, thunkAPI) => {
    try {
      await dronesApi.delete(`images/${image.id}`);
      thunkAPI.dispatch(fetchImagesThunk());
      return image;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const editImageThunk = createAsyncThunk<Image, Image>(
  'editImage',
  async (image, thunkAPI) => {
    try {
      const response = await dronesApi.put(`images/${image.id}`, image);
      thunkAPI.dispatch(fetchImagesThunk());
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);
