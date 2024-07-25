import {
  addManufacturerThunk,
  deleteManufacturerThunk,
  editManufacturerThunk,
} from './manufacturers/manufacturersOperations';
import {
  addDroneThunk,
  deleteDroneThunk,
  editDroneThunk,
} from './drones/dronesOperations';
import {
  addAccessoryThunk,
  deleteAccessoryThunk,
  editAccessoryThunk,
} from './accessories/accessoriesOperations';
import {
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from './categories/categoriesOperations';
import {
  addSubcategoryThunk,
  deleteSubcategoryThunk,
  editSubcategoryThunk,
} from './subcategories/subcategoriesOperations';
import {
  addGroupForDronesThunk,
  deleteGroupForDronesThunk,
  editGroupForDronesThunk,
} from './groupsForDrones/groupsForDronesOperations';

export const thunks = {
  drone: {
    add: addDroneThunk,
    edit: editDroneThunk,
    delete: deleteDroneThunk,
  },
  accessory: {
    add: addAccessoryThunk,
    edit: editAccessoryThunk,
    delete: deleteAccessoryThunk,
  },
  category: {
    add: addCategoryThunk,
    edit: editCategoryThunk,
    delete: deleteCategoryThunk,
  },
  manufacturer: {
    add: addManufacturerThunk,
    edit: editManufacturerThunk,
    delete: deleteManufacturerThunk,
  },
  subcategory: {
    add: addSubcategoryThunk,
    edit: editSubcategoryThunk,
    delete: deleteSubcategoryThunk,
  },
  groupForDrones: {
    add: addGroupForDronesThunk,
    edit: editGroupForDronesThunk,
    delete: deleteGroupForDronesThunk,
  },
};
