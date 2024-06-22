import { useState } from 'react';
import AdminPanelForm from '../../components/Forms/AdminPanelForm/AdminPanelForm';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';

type FormType = 'add' | 'edit' | 'delete';

const Accessory = () => {
  const { isOpen, toggle } = useModal();
  const [formType, setFormType] = useState<FormType>('add');

  const handleOpenModal = (type: FormType) => {
    setFormType(type);
    toggle();
  };

  return (
    <>
      <div className="bg-white shadow w-screen">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Accessory
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
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Discount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Amount
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        1
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"></td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="text-green-500 hover:text-green-700"
                          onClick={() => handleOpenModal('edit')}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleOpenModal('delete')}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <AdminPanelForm type={formType} />
        </Modal>
      )}
    </>
  );
};

export default Accessory;
