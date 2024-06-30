import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchGroupsForDronesThunk,
  addGroupForDronesThunk,
  deleteGroupForDronesThunk,
  editGroupForDronesThunk,
  GroupForDrones,
} from './groupsForDronesOperations';

interface GroupsForDronesState {
  groupsForDrones: GroupForDrones[];
}

const initialGroupsForDronesState: GroupsForDronesState = {
  groupsForDrones: [],
};

const groupsForDronesSlice = createSlice({
  name: 'groupsForDrones',
  initialState: initialGroupsForDronesState,
  reducers: {},
  selectors: {
    selectGroupsForDrones: state => state.groupsForDrones,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchGroupsForDronesThunk.fulfilled,
        (state, { payload }: PayloadAction<GroupForDrones[]>) => {
          state.groupsForDrones = payload;
        }
      )
      .addCase(
        addGroupForDronesThunk.fulfilled,
        (state, { payload }: PayloadAction<GroupForDrones>) => {
          state.groupsForDrones = [...state.groupsForDrones, payload];
        }
      )
      .addCase(
        deleteGroupForDronesThunk.fulfilled,
        (state, { payload }: PayloadAction<{ id: number }>) => {
          state.groupsForDrones = state.groupsForDrones.filter(
            group => group.id !== payload.id
          );
        }
      )
      .addCase(
        editGroupForDronesThunk.fulfilled,
        (state, { payload }: PayloadAction<GroupForDrones>) => {
          const index = state.groupsForDrones.findIndex(
            group => group.id === payload.id
          );
          if (index !== -1) {
            state.groupsForDrones.splice(index, 1, payload);
          }
        }
      );
  },
});

export const groupsForDronesReducer = groupsForDronesSlice.reducer;
export const { selectGroupsForDrones } = groupsForDronesSlice.selectors;
