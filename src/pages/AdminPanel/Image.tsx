import AdminDataTable from '../../components/AdminDataTable/AdminDataTable';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectImages } from '../../redux/images/imagesSlice';
import { type Image } from '../../redux/images/imagesOperations';

const Image = () => {
  const images = useAppSelector(selectImages);

  const renderActions = (
    image: Image,
    handleOpenModal: (type: 'add' | 'edit' | 'delete', item?: Image) => void
  ) => (
    <>
      <button
        className="text-green-500 hover:text-green-700 mr-2"
        onClick={() => handleOpenModal('edit', image)}
      >
        Edit
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleOpenModal('delete', image)}
      >
        Delete
      </button>
    </>
  );

  return (
    <AdminDataTable
      title="Images"
      items={images}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Url', accessor: 'url' },
      ]}
      renderActions={renderActions}
      inputType="image"
    />
  );
};

export default Image;
