const Controls = (props: {
  searchQuery: string;
  isSorted: boolean;
  handleSearchQuery: (query: string) => void;
  handleChange: (checked: boolean) => void;
  handleReset: () => void;
}) => {
  const {
    searchQuery,
    isSorted,
    handleSearchQuery,
    handleChange,
    handleReset,
  } = props;

  return (
    <section className='controls'>
      <div className='search-text'>Search:</div>
      <input
        id='search-box'
        value={searchQuery}
        onChange={(eo) => {
          handleSearchQuery(eo.target.value);
        }}
      />
      <div>
        <input
          type='checkbox'
          id='sort'
          name='sort'
          checked={isSorted}
          onChange={(eo) => {
            handleChange(!!eo.target.checked);
          }}
        />
        <label htmlFor='sort'>Sort list alphabetically </label>
      </div>
      <button className='button-small' onClick={handleReset}>
        Reset
      </button>
    </section>
  );
};

export default Controls;
