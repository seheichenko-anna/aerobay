import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface Accessory {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
  dimensions: string;
  weight: string;
  type: string;
  amount: number;
  category_id: number;
  manufacturer_id: number;
  subcategiries: number[];
}

export const fetchAccessoriesThunk = fetchThunk<Accessory[]>(
  'fetchAccessories',
  'accessories'
);
export const addAccessoryThunk = addThunk<Accessory, Accessory>(
  'addAccessory',
  'accessories',
  fetchAccessoriesThunk
);
export const deleteAccessoryThunk = deleteThunk<{ id: number }, Accessory>(
  'deleteAccessory',
  'accessories',
  fetchAccessoriesThunk
);
export const editAccessoryThunk = editThunk<Accessory, Accessory>(
  'editAccessory',
  'accessories',
  fetchAccessoriesThunk
);
