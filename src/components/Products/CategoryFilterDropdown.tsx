import { FC, ChangeEvent, Dispatch, useState } from 'react';
import c from './Dropdown.module.scss';
import dropdownArrow from '../../assets/catalog/sidebar/top_arrow.svg';

interface SortDropdownProps {
  isSidebarDropdown: boolean;
  isOpen: boolean;
  selectedFilters: string[];
  setSelectedFilters: Dispatch<React.SetStateAction<string[]>>;
}

export const CategoryFilterDropdown: FC<SortDropdownProps> = ({
  isSidebarDropdown,
  isOpen,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen ? true : false);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter(el => el !== value));
    }
  };

  const DropdownArrow = () => {
    return (
      <div className={c.sidebar_dropdown__arrow}>
        <img
          style={
            isDropdownOpen
              ? { transform: 'rotate(360deg)' }
              : { transform: 'rotate(180deg)' }
          }
          src={dropdownArrow}
          alt='arrow-top'
        />
      </div>
    );
  };

  const categories = ['Drone', 'Accessories'];

  const CategoryFilter = () => {
    return (
      <div className={c.dropdown_menu}>
        {categories.map(category => (
          <div key={category}>
            <input
              type='checkbox'
              id={category.toLowerCase()}
              name={category.toLowerCase()}
              value={category}
              checked={selectedFilters?.includes(category) ? true : false}
              onChange={setChecked}
            />

            <label htmlFor={category.toLowerCase()}>{category}</label>
          </div>
        ))}
      </div>
    );
  };

  const SortLabel = () => {
    return <p>{selectedFilters.join(', ')}</p>;
  };

  return (
    <>
      <div
        className={`${c.sidebar_dropdown} cursor-pointer`}
        onClick={handleOpen}
      >
        <SortLabel />

        <DropdownArrow />
      </div>

      {isDropdownOpen && isSidebarDropdown && <CategoryFilter />}
    </>
  );
};
