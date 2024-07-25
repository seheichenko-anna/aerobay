import React from 'react';
import { useSelector } from 'react-redux';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import Button from './Button';
import { fieldMappings } from './FieldMappings';
import FormField from './FormField';
import { selectGroupsForDrones } from '../../../redux/groupsForDrones/groupsForDronesSlice';
import { selectManufacturers } from '../../../redux/manufacturers/manufacturersSlice';
import { selectSubcategories } from '../../../redux/subcategories/subcategoriesSlice';
import { selectCategories } from '../../../redux/categories/categoriesSlice';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';
import { thunks } from '../../../redux/thunks';
import { Subcategory } from '../../../redux/subcategories/subcategoriesOperations';

type InputAdminPanelFormType =
  | 'drone'
  | 'accessory'
  | 'category'
  | 'manufacturer'
  | 'subcategory'
  | 'groupForDrones';

export type FormFieldNames = keyof FormValues;

interface AdminPanelFormProps {
  type: 'add' | 'edit' | 'delete';
  inputType: InputAdminPanelFormType;
  selectedItem?: any;
  closeModal: () => void;
}

export interface FormValues {
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
}

export interface FieldMapping {
  id: FormFieldNames;
  type: string;
  label: string;
}

interface OptionType {
  value: number;
  label: string;
}

const extractErrorMessage = (
  errors: FieldErrors<FormValues>,
  fieldName: FormFieldNames
): string | undefined => {
  const error = errors[fieldName];
  if (error && typeof error === 'object' && 'message' in error) {
    return error.message;
  }
  return undefined;
};

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

  const selectMultiStyles: StylesConfig<OptionType, true> = {
    menu: styles => ({ ...styles, maxHeight: 100, zIndex: 9999 }),
    menuList: styles => ({ ...styles, maxHeight: 100, overflowY: 'scroll' }),
  };

  const selectSingleStyles: StylesConfig<OptionType, false> = {
    menu: styles => ({ ...styles, maxHeight: 100, zIndex: 9999 }),
    menuList: styles => ({ ...styles, maxHeight: 100, overflowY: 'scroll' }),
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    const action = thunks[inputType][type];

    if (!action) {
      console.error('Action is not defined');
      return;
    }

    const typedAction: unknown = action;

    if (typeof typedAction === 'function') {
      dispatch(typedAction(data));
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

  const renderFormFields = (itemType: InputAdminPanelFormType) => {
    return fieldMappings[itemType]?.map(field => {
      const fieldId = field.id;
      if (
        fieldId === 'group_id' ||
        fieldId === 'manufacturer_id' ||
        fieldId === 'category_id' ||
        fieldId === 'subcategories'
      ) {
        const options =
          fieldId === 'group_id'
            ? groupsForDrones
            : fieldId === 'manufacturer_id'
              ? manufacturers
              : fieldId === 'category_id'
                ? categories
                : subcategories;
        if (!options) {
          console.error(`Options for ${fieldId} are undefined`);
          return (
            <div key={fieldId} className="mb-4">
              <p className="text-red-500">
                Error: options for {field.label} are undefined
              </p>
            </div>
          );
        }

        if (fieldId === 'subcategories') {
          const selectedSubcategories = (selectedItem?.subcategories || []).map(
            (subcategory: Subcategory) => ({
              value: subcategory.id,
              label:
                options.find(option => option.id === subcategory.id)?.name ||
                '',
            })
          );

          return (
            <div key={fieldId} className="mb-4">
              <label
                htmlFor={fieldId}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <Select
                id={fieldId}
                options={options.map(option => ({
                  value: option.id,
                  label: option.name,
                }))}
                isMulti
                defaultValue={selectedSubcategories}
                onChange={(
                  selectedOptions: MultiValue<{ value: number; label: string }>
                ) => {
                  const values = selectedOptions.map(option => option.value);
                  setValue(fieldId, values);
                }}
                className="mt-1"
                styles={selectMultiStyles}
              />
              {errors[fieldId] && (
                <p className="mt-2 text-sm text-red-600">
                  {errors[fieldId]?.message}
                </p>
              )}
            </div>
          );
        }
        const selectedOption = options.find(
          option => option.id === selectedItem?.[fieldId]
        );
        return (
          <div key={fieldId} className="mb-4">
            <label
              htmlFor={fieldId}
              className="block text-sm font-medium text-gray-700"
            >
              {getLabelWithoutId(fieldId)}
            </label>
            <Select
              id={fieldId}
              options={options.map(option => ({
                value: option.id,
                label: option.name,
              }))}
              defaultValue={
                selectedOption
                  ? {
                      value: selectedOption.id,
                      label: selectedOption.name,
                    }
                  : undefined
              }
              onChange={(
                selectedOption: SingleValue<{ value: number; label: string }>
              ) => {
                if (selectedOption) {
                  setValue(fieldId, selectedOption.value);
                }
              }}
              className="mt-1"
              styles={selectSingleStyles}
            />
            {errors[fieldId] && (
              <p className="mt-2 text-sm text-red-600">
                {errors[fieldId]?.message}
              </p>
            )}
          </div>
        );
      }

      return (
        <FormField
          key={field.id}
          id={fieldId}
          type={field.type}
          label={field.label}
          register={register}
          error={extractErrorMessage(errors, fieldId)}
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
      <div className="flex justify-end mt-10">
        <Button type="submit">{type === 'delete' ? 'Delete' : 'Save'}</Button>
      </div>
    </form>
  );
};

export default AdminPanelForm;
