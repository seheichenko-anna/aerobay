import { useState } from 'react';
import svg from '../../assets/sprite.svg';
import s from './Search.module.css';
import { useForm } from 'react-hook-form';

type FormData = {
  search: string;
};

const Search = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleSearchOpener = (): void => {
    setIsHidden(!isHidden);
  };

  const onSubmit = (data: FormData) => {
    console.log(data.search);
  };

  const updateSearchValue = (value: string) => {
    setSearch(value);
    console.log(value);
  };

  const handleReset = (): void => {
    reset();
    setSearch('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${s.search_wrapper} ${isHidden ? s.is_hidden : ''}`}>
        <button className={`${s.search_btn} ${s.btn}`} type="submit">
          <svg className={s.icon_search}>
            <use xlinkHref={`${svg}#icon-search`} />
          </svg>
        </button>
        <div className={s.input_wrapper}>
          <input
            className={s.search_field}
            placeholder="Search..."
            {...register('search')}
            onChange={e => updateSearchValue(e.target.value)}
            value={search}
          />
          <button
            className={`${s.reset_btn} ${s.btn}`}
            type="button"
            onClick={search ? handleReset : handleSearchOpener}
          >
            <svg className={s.icon_reset}>
              <use xlinkHref={`${svg}#icon-x`} />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${s.search_wrapper} ${isHidden ? '' : s.is_hidden}`}>
        <button
          className={`${s.btn} ${s.open_btn}`}
          onClick={handleSearchOpener}
          type="button"
        >
          <svg className={s.icon_search}>
            <use xlinkHref={`${svg}#icon-search`} />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
