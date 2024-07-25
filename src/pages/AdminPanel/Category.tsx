import { useAppSelector } from '../../redux/hooks/useAppSelector';
import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';
import { type Category } from '../../redux/categories/categoriesOperations';
import { selectCategories } from '../../redux/categories/categoriesSlice';

const Category = () => {
  const categories = useAppSelector(selectCategories);

  const renderActions = (
    category: Category,
    handleOpenModal: (type: 'add' | 'edit' | 'delete', item?: Category) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', category)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', category)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Category"
      items={categories}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Description', accessor: 'description' },
      ]}
      renderActions={renderActions}
      inputType="category"
    />
  );
};

export default Category;
