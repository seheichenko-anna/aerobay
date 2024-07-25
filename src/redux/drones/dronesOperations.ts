import { createAsyncThunk } from '@reduxjs/toolkit';
import { dronesApi } from '../../axiosConfig/dronesApi';
import { AxiosError } from 'axios';

export interface Drone {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
  amount: number;
  group_id: number;
  manufacturer_id: number;
  subcategories: number[];
}

export const fetchDronesThunk = createAsyncThunk<Drone[]>(
  'fetchDrones',
  async (_, thunkAPI) => {
    try {
      const response = await dronesApi.get('drones');
      console.log(response.data.drones);
      return response.data.drones;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const addDroneThunk = createAsyncThunk<Drone, Drone>(
  'addDrone',
  async (drone, thunkAPI) => {
    console.log(drone);

    try {
      const response = await dronesApi.post('drones', drone);
      console.log(response);

      thunkAPI.dispatch(fetchDronesThunk());
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const deleteDroneThunk = createAsyncThunk<Drone, Drone>(
  'deleteDrone',
  async (drone, thunkAPI) => {
    try {
      await dronesApi.delete(`drones/${drone.id}`);
      thunkAPI.dispatch(fetchDronesThunk());
      return drone;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);

export const editDroneThunk = createAsyncThunk<Drone, Drone>(
  'editDrone',
  async (drone, thunkAPI) => {
    try {
      const response = await dronesApi.put(`drones/${drone.id}`, drone);
      thunkAPI.dispatch(fetchDronesThunk());
      return response.data.drone;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
);
