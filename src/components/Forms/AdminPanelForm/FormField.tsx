import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  register: UseFormRegister<any>;
  error?: any;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  label,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, { required: true })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default FormField;
