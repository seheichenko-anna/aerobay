import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PriceRange {
  minPrice: number;
  maxPrice: number;
  currentMaxPrice: number;
}

const initialState: PriceRange = {
  minPrice: 0,
  maxPrice: 0,
  currentMaxPrice: 0,
};

const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState,

  reducers: {
    setMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number>) {
      state.minPrice = action.payload;
    },
    setSliderMaxPrice(state, action: PayloadAction<number>) {
      state.currentMaxPrice = action.payload;
    },
  },
});

export const { setSliderMaxPrice, setMinPrice, setMaxPrice } =
  priceRangeSlice.actions;

export const priceRangeReducer = priceRangeSlice.reducer;
