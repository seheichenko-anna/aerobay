import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchImagesThunk,
  addImageThunk,
  deleteImageThunk,
  editImageThunk,
  Image,
} from './imagesOperations';

interface ImagesState {
  images: Image[];
  loading: boolean;
}

const initialImagesState: ImagesState = {
  images: [],
  loading: true,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState: initialImagesState,
  reducers: {},
  selectors: {
    selectImages: state => state.images,
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchImagesThunk.fulfilled,
        (state, { payload }: PayloadAction<Image[]>) => {
          state.images = payload;
          state.loading = false;
        }
      )
      .addCase(
        addImageThunk.fulfilled,
        (state, { payload }: PayloadAction<Image>) => {
          state.images = [...state.images, payload];
        }
      )
      .addCase(
        deleteImageThunk.fulfilled,
        (state, { payload }: PayloadAction<Image>) => {
          state.images = state.images.filter(image => image.id !== payload.id);
        }
      )
      .addCase(
        editImageThunk.fulfilled,
        (state, { payload }: PayloadAction<Image>) => {
          const index = state.images.findIndex(
            image => image.id === payload.id
          );
          state.images.splice(index, 1, payload);
        }
      );
  },
});

export const imagesReducer = imagesSlice.reducer;
export const { selectImages } = imagesSlice.selectors;
