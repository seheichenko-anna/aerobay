import { createAsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../../axiosConfig/dronesApi';
import { AxiosError } from 'axios';

export interface GroupForDrones {
  id: number;
  name: string;
  description: string;
}

export const fetchGroupsForDronesThunk = createAsyncThunk<GroupForDrones[]>(
  'fetchGroupsForDrones',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('groups');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addGroupForDronesThunk = createAsyncThunk<
  GroupForDrones,
  GroupForDrones
>('addGroupForDrones', async (group, thunkAPI) => {
  try {
    const response = await dronesApi.post('groups', group);
    thunkAPI.dispatch(fetchGroupsForDronesThunk());
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});

export const deleteGroupForDronesThunk = createAsyncThunk<
  GroupForDrones,
  GroupForDrones
>('deleteGroupForDrones', async (group, thunkAPI) => {
  try {
    await dronesApi.delete(`groups/${group.id}`);
    thunkAPI.dispatch(fetchGroupsForDronesThunk());
    return group;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});

export const editGroupForDronesThunk = createAsyncThunk<
  GroupForDrones,
  GroupForDrones
>('editGroupForDrones', async (group, thunkAPI) => {
  try {
    const response = await dronesApi.put(`groups/${group.id}`, group);
    thunkAPI.dispatch(fetchGroupsForDronesThunk());
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
    return thunkAPI.rejectWithValue('An unexpected error occurred');
  }
});
