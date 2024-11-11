import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Drone } from '../drones/dronesOperations';

interface ComprasionProductsState {
  products: Partial<Drone>[];
}

const initialComprasionProductsState: ComprasionProductsState = {
  products: [
    { title: 'LIDAR Drone 200 IO', price: 12500, discount: 20, image_url: '' },
    { title: 'LIDAR Drone 2500 AM', price: 17000, discount: 0, image_url: '' },
    { title: 'LIDAR Drone 3100 PR', price: 30000, discount: 10, image_url: '' },
    { title: 'LIDAR Drone 480 SM', price: 9800, discount: 0, image_url: '' },
  ],
};

const comprasionProductsSlice = createSlice({
  name: 'comprasionProducts',
  initialState: initialComprasionProductsState,
  reducers: {
    addComprasionProducts: (state, { payload }: PayloadAction<Drone>) => {
      state.products.push(payload);
    },
    deleteComprasionProducts: (state, { payload }: PayloadAction<Drone>) => {
      state.products = state.products.filter(
        product => product.id !== payload.id
      );
    },
  },
  selectors: {
    selectComprasionProducts: state => state.products,
  },
});

export const comprasionProductsReducer = comprasionProductsSlice.reducer;
export const { selectComprasionProducts } = comprasionProductsSlice.selectors;
