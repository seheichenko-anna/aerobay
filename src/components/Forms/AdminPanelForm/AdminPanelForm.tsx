import Button from './Button';
import InputField from './InputField';

interface AdminPanelFormProps {
  type: 'add' | 'edit' | 'delete';
}

const AdminPanelForm: React.FC<AdminPanelFormProps> = ({ type }) => {
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

  return (
    <form className="w-full p-4 overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        {renderFormTitle(type)}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <InputField id="title" type="text" label="Title" />
        <InputField id="description" type="text" label="Description" />
        <InputField id="price" type="number" label="Price" />
        <InputField id="discount" type="text" label="Discount" />
        <InputField id="image_url" type="text" label="Image URL" />
        <InputField id="dimensions" type="text" label="Dimensions" />
        <InputField id="weight" type="text" label="Weight" />
        <InputField id="type" type="text" label="Type" />
        <InputField id="amount" type="number" label="Amount" />
        <InputField id="category_id" type="number" label="Category Id" />
        <InputField
          id="manufacturer_id"
          type="number"
          label="Manufacturer Id"
        />
        <InputField id="subcategories" type="text" label="Subcategories" />
      </div>
      <div className="flex justify-end mt-4">
        <Button type="submit" title="Save" />
      </div>
    </form>
  );
};

export default AdminPanelForm;
