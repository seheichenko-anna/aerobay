import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

interface Accessory {
  id: string;
  name: string;
}

export const fetchAccessoriesThunk = fetchThunk<Accessory[]>(
  'fetchAccessories',
  'accessories'
);
export const addAccessoryThunk = addThunk<Accessory, Accessory>(
  'addAccessory',
  'accessories'
);
export const deleteAccessoryThunk = deleteThunk<{ id: string }, Accessory>(
  'deleteAccessory',
  'accessories'
);
export const editAccessoryThunk = editThunk<Accessory, Accessory>(
  'editAccessory',
  'accessories'
);
