import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { type Subcategory } from '../../redux/subcategories/subcategoriesOperations';
import { selectSubcategories } from '../../redux/subcategories/subcategoriesSlice';

const Subcategory = () => {
  const subcategories = useAppSelector(selectSubcategories);

  const renderActions = (
    subcategory: Subcategory,
    handleOpenModal: (
      type: 'add' | 'edit' | 'delete',
      item?: Subcategory
    ) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', subcategory)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', subcategory)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Subcategory"
      items={subcategories}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Value', accessor: 'value' },
      ]}
      renderActions={renderActions}
      inputType="subcategory"
    />
  );
};

export default Subcategory;
