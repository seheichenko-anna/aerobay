import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addManufacturerThunk,
  deleteManufacturerThunk,
  editManufacturerThunk,
  fetchManufacturersThunk,
  Manufacturer,
} from './manufacturersOperations';

interface ManufacturersState {
  manufacturers: Manufacturer[];
}

const initialManufacturersState: ManufacturersState = {
  manufacturers: [],
};

const manufacturersSlice = createSlice({
  name: 'manufacturers',
  initialState: initialManufacturersState,
  reducers: {},
  selectors: {
    selectManufacturers: state => state.manufacturers,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchManufacturersThunk.fulfilled,
        (state, { payload }: PayloadAction<Manufacturer[]>) => {
          state.manufacturers = payload;
        }
      )
      .addCase(
        addManufacturerThunk.fulfilled,
        (state, { payload }: PayloadAction<Manufacturer>) => {
          state.manufacturers = [...state.manufacturers, payload];
        }
      )
      .addCase(
        deleteManufacturerThunk.fulfilled,
        (state, { payload }: PayloadAction<Manufacturer>) => {
          state.manufacturers = state.manufacturers.filter(
            manufacturer => manufacturer.id !== payload.id
          );
        }
      )
      .addCase(
        editManufacturerThunk.fulfilled,
        (state, { payload }: PayloadAction<Manufacturer>) => {
          const index = state.manufacturers.findIndex(
            manufacturer => manufacturer.id === payload.id
          );
          state.manufacturers.splice(index, 1, payload);
        }
      );
  },
});

export const manufacturesReducer = manufacturersSlice.reducer;
export const { selectManufacturers } = manufacturersSlice.selectors;
