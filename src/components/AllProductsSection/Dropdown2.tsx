import { FC, ChangeEvent, Dispatch, useState } from 'react';
import c from './Dropdown2.module.scss';
import dropdownArrow from '../../assets/catalog/sidebar/top_arrow.svg';

interface IDropdown2Props {
  isSidebarDropdown: boolean;
  selectedFilters: string[];
  setSelectedFilters: Dispatch<React.SetStateAction<string[]>>;
}

export const Dropdown2: FC<IDropdown2Props> = ({
  isSidebarDropdown,
  selectedFilters,
  setSelectedFilters,
}) => {
  const sortByItems = [
    { id: 1, title: 'Low To High' },
    { id: 2, title: 'High To Low' },
    { id: 3, title: 'New' },
    { id: 4, title: 'Sale' },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

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

  const sortByClick = (title: string): React.MouseEventHandler => {
    return () => {
      setSelectedFilters([title]);
      setIsDropdownOpen(false);
    };
  };

  return (
    <>
      <div className={c.sidebar_dropdown}>
        {selectedFilters?.length >= 1 && isSidebarDropdown ? (
          <p style={{ width: 'max-content' }}>
            {selectedFilters?.map(item => (
              <span key={item} className={c.checked_values}>
                {item}
              </span>
            ))}
          </p>
        ) : selectedFilters?.length >= 1 && !isSidebarDropdown ? (
          <p
            style={{
              width: 'max-content',
              color: '#667085',
              fontSize: '14px',
              display: 'block',
            }}
          >
            {selectedFilters[0]}
          </p>
        ) : (
          <p style={{ color: '#667085' }}>Select</p>
        )}

        <div className={c.sidebar_dropdown__arrow} onClick={handleOpen}>
          <img
            style={
              isDropdownOpen
                ? { transform: 'rotate(360deg)' }
                : { transform: 'rotate(180deg)' }
            }
            src={dropdownArrow}
            alt="arrow-top"
          />
        </div>
        {isDropdownOpen && !isSidebarDropdown && (
          <div className={c.sortBy_dropdown_menu}>
            {sortByItems?.map(item => (
              <div key={item?.id} onClick={sortByClick(item?.title)}>
                <p
                  style={
                    selectedFilters?.includes(item?.title)
                      ? { color: '#CAD0D7' }
                      : {}
                  }
                >
                  {item?.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {isDropdownOpen && isSidebarDropdown && (
        <div className={c.dropdown_menu}>
          <div>
            <input
              type="checkbox"
              id="drone"
              name="drone"
              value="Drone"
              checked={selectedFilters?.includes('Drone') ? true : false}
              onChange={setChecked}
            />
            <label htmlFor="drone">Drone</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="accessories"
              name="accessories"
              value="Accessories"
              checked={selectedFilters?.includes('Accessories') ? true : false}
              onChange={setChecked}
            />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
      )}
    </>
  );
};
