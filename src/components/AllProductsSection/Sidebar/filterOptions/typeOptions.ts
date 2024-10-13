import { ChangeEvent } from 'react';
import { TTypeChecked } from '../../../../pages/Catalog/Catalog';

type CheckboxOption = {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const getTypeOptions = (
  isTypeChecked: TTypeChecked,
  setIsTypeChecked: React.Dispatch<React.SetStateAction<TTypeChecked>>,
  handleCheckboxChange: <T>(
    checked: boolean,
    label: string,
    setter: React.Dispatch<React.SetStateAction<T>>,
    state: T,
  ) => void,
): CheckboxOption[] => [
  {
    label: 'Model Drone',
    checked: isTypeChecked['Model Drone'],
    onChange: e =>
      handleCheckboxChange(
        e.target.checked,
        'Model Drone',
        setIsTypeChecked,
        isTypeChecked,
      ),
  },
  {
    label: 'Ready-Solution Drone',
    checked: isTypeChecked['Ready-Solution Drone'],
    onChange: e =>
      handleCheckboxChange(
        e.target.checked,
        'Ready-Solution Drone',
        setIsTypeChecked,
        isTypeChecked,
      ),
  },
];
