interface AdminPanelActionsProps<T> {
  item: T;
  handleOpenModal: (type: 'add' | 'edit' | 'delete', item?: T) => void;
}

const AdminPanelActions = <T extends { id: number }>({
  item,
  handleOpenModal,
}: AdminPanelActionsProps<T>) => (
  <>
    <button
      className="text-green-500 hover:text-green-700 mr-2"
      onClick={() => handleOpenModal('edit', item)}
    >
      Edit
    </button>
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() => handleOpenModal('delete', item)}
    >
      Delete
    </button>
  </>
);

export default AdminPanelActions;
