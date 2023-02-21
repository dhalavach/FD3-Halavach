import React, { useState } from 'react';

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
  const [checked, setChecked] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filterSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    let updatedList = [...mockData];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
    setItems(updatedList);
  };

  const listSort = () => {
    if (checked) {
      let sortedList = [...items];
      sortedList = sortedList.sort((a, b) => a.localeCompare(b));
      setItems(sortedList);
    } else {
      setItems(mockData);
      let updatedList = [...mockData];
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setItems(updatedList);
    }
  };

  const handleChange = () => {
    setChecked((checked) => !checked);
    listSort();
  };

  const handleReset = () => {};

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input id='search-box' onChange={filterSearch} />
        <div>
          <input
            type='checkbox'
            id='sort'
            name='sort'
            //checked={checked}
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
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
