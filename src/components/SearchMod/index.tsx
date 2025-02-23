import styles from './SearchMod.module.scss';

type SearchProps = {
  searchValue: string;
  setSearchValue: Function;
};

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  const onChangeSearchInput: React.FormEventHandler<HTMLInputElement> = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (event.target === null) {
      throw new Error('err');
    }
    setSearchValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={styles.chapter__search}>
      <input
        className={styles.input}
        onChange={onChangeSearchInput}
        value={searchValue}
        autoFocus={true}
        placeholder="Search by name..."
      />

      <div className={styles.clear}>
        {searchValue && (
          <svg
            onClick={() => setSearchValue('')}
            className={styles.clear}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
            <path d="M0 0h48v48H0z" fill="none" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
