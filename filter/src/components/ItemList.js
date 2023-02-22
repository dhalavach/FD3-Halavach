import React, { useState, useEffect } from 'react';

export default function ItemList() {
  const mockData = [
    'california',
    'everything',
    'aboveboard',
    'washington',
    'basketball',
    'weathering',
    'characters',
    'literature',
    'contraband',
    'appreciate',
  ];

  const [items, setItems] = useState(mockData);
  const [checked, setChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSeachInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const handleReset = () => {
    setChecked(false);
    setItems(mockData);
    setSearchQuery('');
  };

  const sortList = (list) => {
    return [...list].sort((a, b) => a.localeCompare(b));
  };

  const filterSearch = (query) => {
    return [...mockData].filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  };

  useEffect(() => {
    checked
      ? setItems(sortList(filterSearch(searchQuery)))
      : setItems(filterSearch(searchQuery));
  }, [checked, searchQuery]);

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input
          id='search-box'
          value={searchQuery}
          onChange={handleSeachInput}
        />
        <div>
          <input
            type='checkbox'
            id='sort'
            name='sort'
            checked={checked}
            onChange={handleChange}
          />
          <label htmlFor='sort'>Sort list alphabetically </label>
        </div>
        <button className='button-small' onClick={handleReset}>
          Reset
        </button>
      </div>
      <div id='item-list'>
        <ol>
          {items.map((item, index) => (
            <li key={index + item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
