import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface Manufacturer {
  id: number;
  name: string;
}

export const fetchManufacturersThunk = fetchThunk<Manufacturer[]>(
  'fetchManufacturers',
  'manufactures'
);
export const addManufacturerThunk = addThunk<Manufacturer, Manufacturer>(
  'addManufacturer',
  'manufactures',
  fetchManufacturersThunk
);
export const deleteManufacturerThunk = deleteThunk<
  { id: number },
  Manufacturer
>('deleteManufacturer', 'manufactures', fetchManufacturersThunk);

export const editManufacturerThunk = editThunk<Manufacturer, Manufacturer>(
  'editManufacturer',
  'manufactures',
  fetchManufacturersThunk
);
