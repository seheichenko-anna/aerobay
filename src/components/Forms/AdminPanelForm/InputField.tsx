interface InputFieldProps {
  id: string;
  type: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label }) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
      />
    </div>
  );
};

export default InputField;
