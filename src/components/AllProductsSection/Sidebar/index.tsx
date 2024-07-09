import { ChangeEvent, useState } from 'react';
import c from './FilterProduct.module.scss';

export const FilterProducts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedfilters, setSelectedfilters] = useState<string[]>(['Drone']);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const setChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedfilters([...selectedfilters, value]);
    } else {
      setSelectedfilters(selectedfilters.filter(el => el !== value));
    }
  };
  console.log(selectedfilters);

  return (
    <aside className={c.filter_product}>
      <div className={c.filter_product__wrap}>
        <h2>Filter Product</h2>
        <div className={c.sidebar_dropdown}>
          <p>
            {selectedfilters?.length >= 1
              ? selectedfilters.map(item => (
                  <span className={c.checked_values}>{item}</span>
                ))
              : 'Select'}
          </p>
          <div className={c.sidebar_dropdown__arrow} onClick={handleOpen}>
            <img
              style={
                isDropdownOpen
                  ? { transform: 'rotate(360deg)' }
                  : { transform: 'rotate(180deg)' }
              }
              src="../../../aerobay/src/assets/catalog/sidebar/top_arrow.svg"
              alt="arrow-top"
            />
          </div>
        </div>
        {isDropdownOpen && (
          <div className={c.dropdown_menu}>
            <div>
              <input
                type="checkbox"
                id="drone"
                name="drone"
                value="Drone"
                checked={selectedfilters?.includes('Drone') ? true : false}
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
                checked={
                  selectedfilters?.includes('Accessories') ? true : false
                }
                onChange={setChecked}
              />
              <label htmlFor="accessories">Accessories</label>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
