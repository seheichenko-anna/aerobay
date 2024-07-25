import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectManufacturers } from '../../redux/manufacturers/manufacturersSlice';
import { type Manufacturer } from '../../redux/manufacturers/manufacturersOperations';
import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';

const Manufacturer = () => {
  const manufacturers = useAppSelector(selectManufacturers);

  const renderActions = (
    manufacturer: Manufacturer,
    handleOpenModal: (
      type: 'add' | 'edit' | 'delete',
      item?: Manufacturer
    ) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', manufacturer)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', manufacturer)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Manufacturer"
      items={manufacturers}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
      ]}
      renderActions={renderActions}
      inputType="manufacturer"
    />
  );
};

export default Manufacturer;
