import { ChangeEvent } from 'react';
import c from './FilterProduct.module.scss';

type CheckboxGroupProps = {
  title: string;
  options: {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }[];
};

export const CheckboxGroup = ({ title, options }: CheckboxGroupProps) => {
  return (
    <div className={c.checkbox_group}>
      <h3>{title}</h3>
      <div className={c.checkbox_group__checkboxes}>
        {options.map((option, idx) => (
          <div key={idx}>
            <input
              type="checkbox"
              id={option.label}
              checked={option.checked}
              onChange={option.onChange}
            />
            <label htmlFor={option.label}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
