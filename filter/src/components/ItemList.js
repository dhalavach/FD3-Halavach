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

  const filterList = (query) => {
    return [...mockData].filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  };

  const sortList = (list) => {
    return [...list].sort((a, b) => a.localeCompare(b));
  };

  const filterSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const updatedList = filterList(query);
    checked ? setItems(sortList(updatedList)) : setItems(updatedList);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleReset = () => {
    setChecked(false);
    setItems(mockData);
    setSearchQuery('');
  };

  useEffect(() => {
    checked ? setItems(sortList(items)) : setItems(filterList(searchQuery));
  }, [checked]);

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input id='search-box' value={searchQuery} onChange={filterSearch} />
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
