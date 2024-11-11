import c from './FilterProduct.module.scss';
import { ProductFilter } from '.';
import { useAppDispatch } from '../../../redux/hooks/useAppDispatch';
import { toggleOption } from '../../../redux/filtersSlice';

export const CheckboxGroup = ({
  group,
}: {
  group: ProductFilter;
  filters: ProductFilter[];
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={c.checkbox_group}>
      <h3>{group.title}</h3>

      <div className={c.checkbox_group__checkboxes}>
        {group.options.map((option, idx) => (
          <div key={idx}>
            <input
              type='checkbox'
              id={option.label}
              checked={option.checked}
              onChange={() =>
                dispatch(toggleOption({ title: group.title, ...option }))
              }
            />

            <label htmlFor={option.label}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
