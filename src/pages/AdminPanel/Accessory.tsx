import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectAccessories } from '../../redux/accessories/accessoriesSlice';
import {
  fetchAccessoriesThunk,
  type Accessory,
} from '../../redux/accessories/accessoriesOperations';
import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useEffect } from 'react';

const Accessory = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccessoriesThunk());
  }, [dispatch]);

  const accessories = useAppSelector(selectAccessories);

  const renderActions = (
    accessory: Accessory,
    handleOpenModal: (type: 'add' | 'edit' | 'delete', item?: Accessory) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', accessory)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', accessory)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Accessory"
      items={accessories}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Title', accessor: 'title' },
        { header: 'Price', accessor: 'price' },
        { header: 'Type', accessor: 'type' },
        { header: 'Amount', accessor: 'amount' },
      ]}
      renderActions={renderActions}
      inputType="accessory"
    />
  );
};

export default Accessory;
