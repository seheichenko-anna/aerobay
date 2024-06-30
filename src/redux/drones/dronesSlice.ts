import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchDronesThunk,
  addDroneThunk,
  deleteDroneThunk,
  editDroneThunk,
  Drone,
} from './dronesOperations';

interface DronesState {
  drones: Drone[];
}

const initialDronesState: DronesState = {
  drones: [],
};

const dronesSlice = createSlice({
  name: 'drones',
  initialState: initialDronesState,
  reducers: {},
  selectors: {
    selectDrones: state => state.drones,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchDronesThunk.fulfilled,
        (state, { payload }: PayloadAction<Drone[]>) => {
          state.drones = payload;
        }
      )
      .addCase(
        addDroneThunk.fulfilled,
        (state, { payload }: PayloadAction<Drone>) => {
          state.drones = [...state.drones, payload];
        }
      )
      .addCase(
        deleteDroneThunk.fulfilled,
        (state, { payload }: PayloadAction<{ id: number }>) => {
          state.drones = state.drones.filter(drone => drone.id !== payload.id);
        }
      )
      .addCase(
        editDroneThunk.fulfilled,
        (state, { payload }: PayloadAction<Drone>) => {
          const index = state.drones.findIndex(
            drone => drone.id === payload.id
          );
          state.drones.splice(index, 1, payload);
        }
      );
  },
});

export const dronesReducer = dronesSlice.reducer;
export const { selectDrones } = dronesSlice.selectors;
