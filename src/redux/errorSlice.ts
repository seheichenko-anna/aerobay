import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface ErrorState {
  error: string | null;
}

const initialErrorState: ErrorState = {
  error: null,
};

const slice = createSlice({
  name: 'error',
  initialState: initialErrorState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        (action): action is PayloadAction<any> =>
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload
            ? payload.message || String(payload)
            : 'An error occurred';
          toast.error(state.error);
        }
      )
      .addMatcher(
        (action): action is PayloadAction<any> =>
          action.type.endsWith('/pending'),
        state => {
          state.error = null;
        }
      )
      .addMatcher(
        (action): action is PayloadAction<any> =>
          action.type.endsWith('/fulfilled'),
        state => {
          state.error = null;
        }
      );
  },
});

export const errorReducer = slice.reducer;
