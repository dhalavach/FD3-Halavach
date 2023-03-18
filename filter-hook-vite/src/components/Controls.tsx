import React, {useState} from 'react' 

export default function Controls(props: {
  handleSearchQuery: (query: string) => void;
  handleChange: (checked: Boolean) => void;
  handleReset: () => void;
}
) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSorted, setIsSorted] = useState(false);



  const { handleSearchQuery, handleChange, handleReset} = props

  return (
    <div className='search-header'>
    <div className='search-text'>Search:</div>
    <input
      id='search-box'
      value={searchQuery}
        onChange={(eo) => {
          setSearchQuery(eo.target.value)
          handleSearchQuery(eo.target.value)
        }}
    />
    <div>
      <input
        type='checkbox'
        id='sort'
        name='sort'
        checked={isSorted}
          onChange={(eo) => {
          setIsSorted(isSorted => !isSorted)
          handleChange(!!eo.target.checked)
          }}
      />
      <label htmlFor='sort'>Sort list alphabetically </label>
    </div>
    <button className='button-small' onClick={handleReset}>
      Reset
    </button>
  </div>
    )
}