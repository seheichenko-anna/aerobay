import React from 'react';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import {
  Manufacturer,
  addManufacturerThunk,
  deleteManufacturerThunk,
  editManufacturerThunk,
} from '../../../redux/manufacturers/manufacturersOperations';
import Button from './Button';
import { fieldMappings } from './FieldMappings';
import FormField from './FormField';
import { selectGroupsForDrones } from '../../../redux/groupsForDrones/groupsForDronesSlice';
import { selectManufacturers } from '../../../redux/manufacturers/manufacturersSlice';
import { selectSubcategories } from '../../../redux/subcategories/subcategoriesSlice';
import { selectCategories } from '../../../redux/categories/categoriesSlice';
import {
  GroupForDrones,
  addGroupForDronesThunk,
  deleteGroupForDronesThunk,
  editGroupForDronesThunk,
} from '../../../redux/groupsForDrones/groupsForDronesOperations';
import {
  Subcategory,
  addSubcategoryThunk,
  deleteSubcategoryThunk,
  editSubcategoryThunk,
} from '../../../redux/subcategories/subcategoriesOperations';
import {
  Category,
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from '../../../redux/categories/categoriesOperations';
import {
  Accessory,
  addAccessoryThunk,
  deleteAccessoryThunk,
  editAccessoryThunk,
} from '../../../redux/accessories/accessoriesOperations';
import {
  Drone,
  addDroneThunk,
  deleteDroneThunk,
  editDroneThunk,
} from '../../../redux/drones/dronesOperations';
import Select from 'react-select';

interface AdminPanelFormProps {
  type: 'add' | 'edit' | 'delete';
  inputType:
    | 'drone'
    | 'accessory'
    | 'category'
    | 'manufacturer'
    | 'subcategory'
    | 'groupForDrones';
  selectedItem?: any;
  closeModal: () => void;
}

interface FormValues {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  discount?: number;
  image_url?: string;
  dimensions?: string;
  weight?: string;
  type?: string;
  amount?: number;
  name?: string;
  value?: string;
  group_id?: number;
  manufacturer_id?: number;
  category_id?: number;
  subcategories?: number[];
  [key: string]: any;
}

const AdminPanelForm: React.FC<AdminPanelFormProps> = ({
  type,
  inputType,
  selectedItem,
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: selectedItem || {},
  });
  const dispatch = useAppDispatch();
  const groupsForDrones = useSelector(selectGroupsForDrones);
  const manufacturers = useSelector(selectManufacturers);
  const subcategories = useSelector(selectSubcategories);
  const categories = useSelector(selectCategories);

  console.log(subcategories);
  console.log(categories);
  console.log(selectedItem);

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data.subcategories);
    console.log(data);
    switch (inputType) {
      case 'manufacturer':
        const manufacturerData = data as Manufacturer;
        if (type === 'add') {
          dispatch(addManufacturerThunk(manufacturerData));
        } else if (type === 'edit') {
          dispatch(editManufacturerThunk(manufacturerData));
        } else if (type === 'delete') {
          dispatch(deleteManufacturerThunk(manufacturerData));
        }
        break;
      case 'drone':
        const droneData = data as Drone;
        if (type === 'add') {
          dispatch(addDroneThunk(droneData));
        } else if (type === 'edit') {
          dispatch(editDroneThunk(droneData));
        } else if (type === 'delete') {
          dispatch(deleteDroneThunk(droneData));
        }
        break;
      case 'accessory':
        const accessoryData = data as Accessory;
        if (type === 'add') {
          dispatch(addAccessoryThunk(accessoryData));
        } else if (type === 'edit') {
          dispatch(editAccessoryThunk(accessoryData));
        } else if (type === 'delete') {
          dispatch(deleteAccessoryThunk(accessoryData));
        }
        break;
      case 'category':
        const categoryData = data as Category;
        if (type === 'add') {
          dispatch(addCategoryThunk(categoryData));
        } else if (type === 'edit') {
          dispatch(editCategoryThunk(categoryData));
        } else if (type === 'delete') {
          dispatch(deleteCategoryThunk(categoryData));
        }
        break;
      case 'subcategory':
        const subcategoryData = data as Subcategory;
        console.log(subcategoryData);
        if (type === 'add') {
          dispatch(addSubcategoryThunk(subcategoryData));
        } else if (type === 'edit') {
          dispatch(editSubcategoryThunk(subcategoryData));
        } else if (type === 'delete') {
          dispatch(deleteSubcategoryThunk(subcategoryData));
        }
        break;
      case 'groupForDrones':
        const groupForDrones = data as GroupForDrones;
        if (type === 'add') {
          dispatch(addGroupForDronesThunk(groupForDrones));
        } else if (type === 'edit') {
          dispatch(editGroupForDronesThunk(groupForDrones));
        } else if (type === 'delete') {
          dispatch(deleteGroupForDronesThunk(groupForDrones));
        }
        break;
      default:
        break;
    }
    closeModal();
  };

  const renderFormTitle = (type: 'add' | 'edit' | 'delete') => {
    switch (type) {
      case 'add':
        return 'Add item';
      case 'edit':
        return 'Edit item';
      case 'delete':
        return 'Delete item';
      default:
        return null;
    }
  };

  const getLabelWithoutId = (label: string): string => {
    switch (label) {
      case 'group_id':
        return 'Group';
      case 'manufacturer_id':
        return 'Manufacturer';
      case 'category_id':
        return 'Category';
      default:
        return label;
    }
  };

  const renderFormFields = (
    itemType:
      | 'drone'
      | 'accessory'
      | 'category'
      | 'manufacturer'
      | 'subcategory'
      | 'groupForDrones'
  ) => {
    return fieldMappings[itemType]?.map(field => {
      if (
        field.id === 'group_id' ||
        field.id === 'manufacturer_id' ||
        field.id === 'category_id' ||
        field.id === 'subcategories'
      ) {
        const options =
          field.id === 'group_id'
            ? groupsForDrones
            : field.id === 'manufacturer_id'
              ? manufacturers
              : field.id === 'category_id'
                ? categories
                : subcategories;
        if (!options) {
          console.error(`Options for ${field.id} are undefined`);
          return (
            <div key={field.id} className="mb-4">
              <p className="text-red-500">
                Error: options for {field.label} are undefined
              </p>
            </div>
          );
        }

        if (field.id === 'subcategories') {
          const selectedSubcategories = options.filter(option =>
            (selectedItem?.subcategories || []).includes(option.id)
          );

          return (
            <div key={field.id} className="mb-4">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <Select
                id={field.id}
                options={options.map(option => ({
                  value: option.id,
                  label: option.name,
                }))}
                isMulti
                defaultValue={selectedSubcategories.map(option => ({
                  value: option.id,
                  label: option.name,
                }))}
                onChange={(selectedOptions: any) => {
                  const values = selectedOptions.map(
                    (option: any) => option.value
                  );
                  console.log(values);
                  setValue(field.id, values);
                }}
                className="mt-1"
              />
              {errors[field.id] && (
                <p className="mt-2 text-sm text-red-600">
                  {errors[field.id]?.message}
                </p>
              )}
            </div>
          );
        }

        return (
          <div key={field.id} className="mb-4">
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700"
            >
              {getLabelWithoutId(field.id)}
            </label>
            <Select
              id={field.id}
              options={options.map(option => ({
                value: option.id,
                label: option.name,
              }))}
              defaultValue={
                selectedItem
                  ? {
                      value: selectedItem[field.id],
                      label: selectedItem[field.label],
                    }
                  : undefined
              }
              onChange={(selectedOption: any) => {
                console.log(selectedOption);
                register(field.id, {
                  value: selectedOption.value,
                });
              }}
              className="mt-1"
            />
            {errors[field.id] && (
              <p className="mt-2 text-sm text-red-600">
                {errors[field.id]?.message}
              </p>
            )}
          </div>
        );
      }

      return (
        <FormField
          key={field.id}
          id={field.id}
          type={field.type}
          label={field.label}
          register={register}
          error={errors[field.id as keyof FormValues]}
        />
      );
    });
  };

  return (
    <form
      className="w-full p-4 overflow-y-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        {renderFormTitle(type)}
      </h2>
      {type === 'delete' ? (
        <div className="text-red-500">
          Are you sure you want to delete this item?
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {renderFormFields(inputType)}
        </div>
      )}
      <div className="flex justify-end mt-4">
        <Button type="submit">{type === 'delete' ? 'Delete' : 'Save'}</Button>
      </div>
    </form>
  );
};

export default AdminPanelForm;
