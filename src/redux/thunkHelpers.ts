import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../axiosConfig/dronesApi';
import { AxiosError } from 'axios';

const handleAsyncThunk = async <T>(
  method: 'get' | 'post' | 'delete' | 'patch',
  url: string,
  data: any,
  thunkAPI: {
    rejectWithValue: (value: any) => any;
  }
): Promise<T> => {
  try {
    const response = await dronesApi[method](url, data);
    return response.data;
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
    return handleAsyncThunk<T>('get', url, null, thunkAPI);
  });

export const addThunk = <T, U>(
  type: string,
  url: string
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    return handleAsyncThunk<T>('post', url, data, thunkAPI);
  });

export const deleteThunk = <T, U>(
  type: string,
  url: string
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    return handleAsyncThunk<T>(
      'delete',
      `${url}/${(data as any).id}`,
      null,
      thunkAPI
    );
  });

export const editThunk = <T, U>(
  type: string,
  url: string
): AsyncThunk<T, U, {}> =>
  createAsyncThunk(type, async (data: U, thunkAPI) => {
    return handleAsyncThunk<T>(
      'patch',
      `${url}/${(data as any).id}`,
      { data },
      thunkAPI
    );
  });
