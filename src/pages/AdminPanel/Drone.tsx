import { useEffect } from 'react';
import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';
import {
  fetchDronesThunk,
  type Drone,
} from '../../redux/drones/dronesOperations';
import { selectDrones } from '../../redux/drones/dronesSlice';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

const Drone = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDronesThunk());
  }, [dispatch]);

  const drones = useAppSelector(selectDrones);

  const renderActions = (
    drone: Drone,
    handleOpenModal: (type: 'add' | 'edit' | 'delete', item?: Drone) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', drone)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', drone)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Drones"
      items={drones}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Title', accessor: 'title' },
        { header: 'Price', accessor: 'price' },
        { header: 'Amount', accessor: 'amount' },
      ]}
      renderActions={renderActions}
      inputType="drone"
    />
  );
};

export default Drone;
