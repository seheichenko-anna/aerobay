import { ChangeEvent } from 'react';
import { TAvailabilityChecked } from '../../../../pages/Catalog/Catalog';

type CheckboxOption = {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const getAvailabilityOptions = (
  isAvailabilityChecked: TAvailabilityChecked,
  setIsAvailabilityChecked: React.Dispatch<
    React.SetStateAction<TAvailabilityChecked>
  >,
  handleCheckboxChange: <T>(
    checked: boolean,
    label: string,
    setter: React.Dispatch<React.SetStateAction<T>>,
    state: T,
  ) => void,
): CheckboxOption[] => [
  {
    label: 'In Stock',
    checked: isAvailabilityChecked['In stock'],
    onChange: e =>
      handleCheckboxChange(
        e.target.checked,
        'In stock',
        setIsAvailabilityChecked,
        isAvailabilityChecked,
      ),
  },
  {
    label: 'Not Available',
    checked: isAvailabilityChecked['Not available'],
    onChange: e =>
      handleCheckboxChange(
        e.target.checked,
        'Not available',
        setIsAvailabilityChecked,
        isAvailabilityChecked,
      ),
  },
];
