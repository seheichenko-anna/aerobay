import { FC, ChangeEvent, Dispatch, useState } from 'react';
import c from './Dropdown.module.scss';
import dropdownArrow from '../../assets/catalog/sidebar/top_arrow.svg';
import { SortByItems, sortByItems } from '../../pages/Catalog/consts/sortByItems';
import { useSort } from '../../pages/Catalog/providers/SortProvider';

interface SortDropdownProps {
  isSidebarDropdown: boolean;
  isOpen: boolean;
  selectedFilters: string[];
  setSelectedFilters: Dispatch<React.SetStateAction<string[]>>;
}

export const SortDropdown: FC<SortDropdownProps> = ({
  isSidebarDropdown,
  isOpen,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen ? true : false);
  const { currentSort, setCurrentSort } = useSort()!;

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

  const sortByClick = (title: SortByItems): React.MouseEventHandler => {
    return () => {
      setSelectedFilters([title]);
      setCurrentSort(title);
      setIsDropdownOpen(false);
    };
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

  const CategoryFilter = () => {
    return (
      <div className={c.dropdown_menu}>
        <div>
          <input
            type='checkbox'
            id='drone'
            name='drone'
            value='Drone'
            checked={selectedFilters?.includes('Drone') ? true : false}
            onChange={setChecked}
          />
          <label htmlFor='drone'>Drone</label>
        </div>

        <div>
          <input
            type='checkbox'
            id='accessories'
            name='accessories'
            value='Accessories'
            checked={selectedFilters?.includes('Accessories') ? true : false}
            onChange={setChecked}
          />

          <label htmlFor='accessories'>Accessories</label>
        </div>
      </div>
    );
  };

  const SortDropdownList = () => {
    return (
      <div className={c.sortBy_dropdown_menu}>
        {sortByItems.map(item => (
          <div key={item.id} onClick={sortByClick(item.title)}>
            <p style={item.title === currentSort ? { color: '#CAD0D7' } : {}}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const SortLabel = () => {
    return <p className={c.dropdown_text}>{currentSort}</p>;
  };

  return (
    <>
      <div
        className={`${c.sidebar_dropdown} cursor-pointer`}
        onClick={handleOpen}
      >
        <SortLabel />

        <DropdownArrow />

        {isDropdownOpen && !isSidebarDropdown && <SortDropdownList />}
      </div>

      {/* {isDropdownOpen && isSidebarDropdown && <CategoryFilter />} */}
    </>
  );
};
