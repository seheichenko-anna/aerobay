import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Drone } from '../drones/dronesOperations';
import { Accessory } from '../accessories/accessoriesOperations';

interface ComparisonProductsState {
  products: (Partial<Drone> | Partial<Accessory>)[];
}

const initialComparisonProductsState: ComparisonProductsState = {
  products: [],
};

const comparisonProductsSlice = createSlice({
  name: 'comparisonProducts',
  initialState: initialComparisonProductsState,
  reducers: {
    addComparisonProduct: (
      state,
      { payload }: PayloadAction<Partial<Drone> | Partial<Accessory>>
    ) => {
      state.products.push(payload);
    },
    deleteComparisonProduct: (
      state,
      { payload }: PayloadAction<Partial<Drone> | Partial<Accessory>>
    ) => {
      state.products = state.products.filter(
        product => product.id !== payload.id
      );
    },
    deleteProductsByType: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter(product => {
        const productType =
          'type' in product && product.type ? product.type : 'Drone';
        return productType !== payload;
      });
    },
    clearAllProducts: state => {
      state.products = [];
    },
  },
  selectors: {
    selectComparisonProducts: state => state.products,
  },
});

export const {
  addComparisonProduct,
  deleteComparisonProduct,
  deleteProductsByType,
  clearAllProducts,
} = comparisonProductsSlice.actions;

export const comparisonProductsReducer = comparisonProductsSlice.reducer;
export const { selectComparisonProducts } = comparisonProductsSlice.selectors;
