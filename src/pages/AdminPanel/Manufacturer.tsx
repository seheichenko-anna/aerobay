import { useState } from 'react';
import AdminPanelForm from '../../components/Forms/AdminPanelForm/AdminPanelForm';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectManufacturers } from '../../redux/manufacturers/manufacturersSlice';
import type { Manufacturer } from '../../redux/manufacturers/manufacturersOperations';

type FormType = 'add' | 'edit' | 'delete';

const Manufacturer = () => {
  const { isOpen, toggle } = useModal();
  const [formType, setFormType] = useState<FormType>('add');
  const [selectedManufacturer, setSelectedManufacturer] =
    useState<Manufacturer | null>(null);
  const manufacturers = useAppSelector(selectManufacturers);

  const handleOpenModal = (type: FormType, manufacturer?: Manufacturer) => {
    setFormType(type);
    setSelectedManufacturer(manufacturer || null);
    toggle();
  };

  return (
    <>
      <div className="bg-white shadow w-screen">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manufacturer
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
                        Name
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
                    {manufacturers && manufacturers.length > 0 ? (
                      manufacturers.map(manufacturer => (
                        <tr key={manufacturer.id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {manufacturer.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {manufacturer.name}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              className="text-green-500 hover:text-green-700"
                              onClick={() =>
                                handleOpenModal('edit', manufacturer)
                              }
                            >
                              Edit
                            </button>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() =>
                                handleOpenModal('delete', manufacturer)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          className="px-6 py-4 text-sm font-medium text-gray-800"
                          colSpan={4}
                        >
                          No manufacturers found
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
            inputType="manufacturer"
            selectedItem={selectedManufacturer}
            closeModal={toggle}
          />
        </Modal>
      )}
    </>
  );
};

export default Manufacturer;
