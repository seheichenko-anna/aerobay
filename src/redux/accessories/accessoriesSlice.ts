import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAccessoriesThunk,
  addAccessoryThunk,
  deleteAccessoryThunk,
  editAccessoryThunk,
} from './accessoriesOperations';

interface Accessory {
  id: string;
  name: string;
  // інші поля аксесуару
}

interface AccessoriesState {
  accessories: Accessory[];
}

const initialAccessoriesState: AccessoriesState = {
  accessories: [],
};

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: initialAccessoriesState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchAccessoriesThunk.fulfilled,
        (state, { payload }: PayloadAction<Accessory[]>) => {
          state.accessories = payload;
        }
      )
      .addCase(
        addAccessoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Accessory>) => {
          state.accessories.push(payload);
        }
      )
      .addCase(
        deleteAccessoryThunk.fulfilled,
        (state, { payload }: PayloadAction<{ id: string }>) => {
          state.accessories = state.accessories.filter(
            accessory => accessory.id !== payload.id
          );
        }
      )
      .addCase(
        editAccessoryThunk.fulfilled,
        (state, { payload }: PayloadAction<Accessory>) => {
          const index = state.accessories.findIndex(
            accessory => accessory.id === payload.id
          );
          state.accessories.splice(index, 1, payload);
        }
      );
  },
});

export const accessoriesReducer = accessoriesSlice.reducer;
