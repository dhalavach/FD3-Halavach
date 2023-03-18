export default function Controls(props: {
  searchQuery: string;
  isSorted: Boolean;
  handleSearchQuery: (query: string) => void;
  handleChange: (checked: Boolean) => void;
  handleReset: () => void;
}) {
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
          checked={!!isSorted}
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
}
