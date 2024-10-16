export type CheckboxOption<T> = {
  label: keyof T;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const handleCheckboxChange = <T>(
  checked: boolean,
  label: keyof T,
  setter: React.Dispatch<React.SetStateAction<T>>,
  state: T,
) => {
  setter({ ...state, [label]: checked });
};

export const getCheckboxOptions = <T extends Record<string, boolean>>(
  isTypeChecked: T,
  setIsTypeChecked: React.Dispatch<React.SetStateAction<T>>,
): CheckboxOption<T>[] => {
  return (Object.keys(isTypeChecked) as Array<keyof T>).map(label => ({
    label,
    checked: isTypeChecked[label],
    onChange: e =>
      handleCheckboxChange(
        e.target.checked,
        label,
        setIsTypeChecked,
        isTypeChecked,
      ),
  }));
};
