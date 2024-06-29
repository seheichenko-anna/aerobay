import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import {
  addManufacturerThunk,
  deleteManufacturerThunk,
  editManufacturerThunk,
} from '../../../redux/manufacturers/manufacturersOperations';
import Button from './Button';
import { fieldMappings } from './FieldMappings';
import FormField from './FormField';

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
  name: string;
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
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: selectedItem || {},
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (type === 'add') {
      dispatch(addManufacturerThunk(data));
    } else if (type === 'edit') {
      console.log(data);
      dispatch(editManufacturerThunk(data));
    } else if (type === 'delete') {
      dispatch(deleteManufacturerThunk(data));
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

  const renderFormFields = (
    itemType:
      | 'drone'
      | 'accessory'
      | 'category'
      | 'manufacturer'
      | 'subcategory'
      | 'groupForDrones'
  ) => {
    return fieldMappings[itemType]?.map(field => (
      <FormField
        key={field.id}
        id={field.id}
        type={field.type}
        label={field.label}
        register={register}
        error={errors[field.id as keyof FormValues]}
      />
    ));
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
        <Button type="submit">{type === 'delete' ? 'Delete' : 'Save'} </Button>
      </div>
    </form>
  );
};

export default AdminPanelForm;
