import { fetchThunk, addThunk, deleteThunk, editThunk } from '../thunkHelpers';

export interface GroupForDrones {
  id: number;
  name: string;
  description: string;
}

export const fetchGroupsForDronesThunk = fetchThunk<GroupForDrones[]>(
  'fetchGroupsForDrones',
  'groups'
);

export const addGroupForDronesThunk = addThunk<GroupForDrones, GroupForDrones>(
  'addGroupForDrones',
  'groups',
  fetchGroupsForDronesThunk
);

export const deleteGroupForDronesThunk = deleteThunk<
  { id: number },
  GroupForDrones
>('deleteGroupForDrones', 'groups', fetchGroupsForDronesThunk);

export const editGroupForDronesThunk = editThunk<
  GroupForDrones,
  GroupForDrones
>('editGroupForDrones', 'groups', fetchGroupsForDronesThunk);
