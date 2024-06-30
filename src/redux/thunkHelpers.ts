import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../axiosConfig/dronesApi';
import { AxiosError } from 'axios';

const handleAsyncThunk = async <T>(
  method: 'get' | 'post' | 'delete' | 'patch' | 'put',
  url: string,
  data: any,
  thunkAPI: {
    rejectWithValue: (value: any) => any;
  }
): Promise<T> => {
  try {
    const response = await dronesApi[method](url, data);
    if ('data' in response.data) {
      return response.data.data;
    } else if ('drones' in response.data) {
      return response.data.drones;
    } else if ('accessories' in response.data) {
      return response.data.accessories;
    } else {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
};

export const fetchThunk = <T>(
  type: string,
  url: string
): AsyncThunk<T, void, {}> =>
  createAsyncThunk(type, async (_, thunkAPI) => {
    return await handleAsyncThunk<T>('get', url, null, thunkAPI);
  });

export const addThunk = <T, U>(
  type: string,
  url: string,
  fetchThunk: AsyncThunk<any, void, {}>
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    const response = await handleAsyncThunk<T>('post', url, data, thunkAPI);
    thunkAPI.dispatch(fetchThunk());
    return response;
  });

export const deleteThunk = <T, U>(
  type: string,
  url: string,
  fetchThunk: AsyncThunk<any, void, {}>
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    const response = await handleAsyncThunk<T>(
      'delete',
      `${url}/${(data as any).id}`,
      null,
      thunkAPI
    );
    thunkAPI.dispatch(fetchThunk());
    return response;
  });

export const editThunk = <T, U>(
  type: string,
  url: string,
  fetchThunk: AsyncThunk<any, void, {}>
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    const response = await handleAsyncThunk<T>(
      'put',
      `${url}/${(data as any).id}`,
      data,
      thunkAPI
    );
    thunkAPI.dispatch(fetchThunk());
    return response;
  });
