import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
}

const initialLoadingState: LoadingState = {
  loading: false,
};

const slice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {},
  selectors: {
    selectIsLoading: state => state.loading,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        (action): action is PayloadAction<any> =>
          action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action): action is PayloadAction<any> =>
          action.type.endsWith('/rejected') ||
          action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = slice.reducer;
export const { selectIsLoading } = slice.selectors;
