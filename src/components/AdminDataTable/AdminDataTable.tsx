import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import AdminPanelForm from '../../components/Forms/AdminPanelForm/AdminPanelForm';
import { useModal } from '../../hooks/useModal';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectIsLoading } from '../../redux/loadingSlice';

type FormType = 'add' | 'edit' | 'delete';
type InputType =
  | 'drone'
  | 'accessory'
  | 'category'
  | 'manufacturer'
  | 'subcategory'
  | 'groupForDrones';

interface AdminDataTableProps<T> {
  title: string;
  items: T[];
  columns: { header: string; accessor: keyof T }[];
  renderActions: (
    item: T,
    handleOpenModal: (type: FormType, item?: T) => void
  ) => React.ReactNode;
  inputType: InputType;
}

const AdminDataTable = <T extends { id: string | number }>({
  title,
  items,
  columns,
  renderActions,
  inputType,
}: AdminDataTableProps<T>) => {
  const { isOpen, toggle } = useModal();
  const [formType, setFormType] = useState<FormType>('add');
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const isLoading = useAppSelector(selectIsLoading);

  const handleOpenModal = (type: FormType, item?: T) => {
    setFormType(type);
    setSelectedItem(item || null);
    toggle();
  };

  return (
    <>
      <div className="bg-white shadow w-screen">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-regular text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleOpenModal('add')}
          >
            + Add
          </button>
        </div>
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {columns.map((column, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                        >
                          {column.header}
                        </th>
                      ))}
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {isLoading ? (
                      <tr>
                        <td
                          className="px-6 py-4 text-sm font-medium text-gray-800"
                          colSpan={columns.length + 1}
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : items && items.length > 0 ? (
                      items.map((item, index) => (
                        <tr key={index}>
                          {columns.map((column, index) => (
                            <td
                              key={index}
                              className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                            >
                              {String(item[column.accessor])}
                            </td>
                          ))}
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            {renderActions(item, handleOpenModal)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          className="px-6 py-4 text-sm font-medium text-gray-800"
                          colSpan={columns.length + 1}
                        >
                          No items found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <AdminPanelForm
            type={formType}
            inputType={inputType}
            selectedItem={selectedItem}
            closeModal={toggle}
          />
        </Modal>
      )}
    </>
  );
};

export default AdminDataTable;
