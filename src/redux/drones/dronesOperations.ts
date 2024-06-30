import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface Drone {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
  amount: number;
  group_id: number;
  manufacturer_id: number;
  subcategories: number[];
}

export const fetchDronesThunk = fetchThunk<Drone[]>('fetchDrones', 'drones');
export const addDroneThunk = addThunk<Drone, Drone>(
  'addDrone',
  'drones',
  fetchDronesThunk
);
export const deleteDroneThunk = deleteThunk<{ id: number }, Drone>(
  'deleteDrone',
  'drones',
  fetchDronesThunk
);
export const editDroneThunk = editThunk<Drone, Drone>(
  'editDrone',
  'drones',
  fetchDronesThunk
);
