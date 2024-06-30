import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectGroupsForDrones } from '../../redux/groupsForDrones/groupsForDronesSlice';
import { type GroupForDrones } from '../../redux/groupsForDrones/groupsForDronesOperations';
import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';

const GroupForDrones = () => {
  const groupForDrones = useAppSelector(selectGroupsForDrones);

  const renderActions = (
    group: GroupForDrones,
    handleOpenModal: (
      type: 'add' | 'edit' | 'delete',
      item?: GroupForDrones
    ) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', group)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', group)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Group For Drones"
      items={groupForDrones}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Description', accessor: 'description' },
      ]}
      renderActions={renderActions}
      inputType="groupForDrones"
    />
  );
};

export default GroupForDrones;
