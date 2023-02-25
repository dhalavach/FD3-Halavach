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
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSeachInput = (eo) => {
    setSearchQuery(eo.target.value);
  };

  const handleChange = (eo) => {
    setIsSorted(eo.target.checked);
  };

  const handleReset = () => {
    setIsSorted(false);
    setSearchQuery('');
  };

  const sortList = (array) => {
    const collator = new Intl.Collator('en', {
      numeric: true,
      sensitivity: 'base',
    });
    return array.sort((a, b) => {
      return collator.compare(a, b);
    });
  };

  useEffect(() => {
    let arr = [...mockData];
    if (searchQuery) {
      arr = arr.filter((item) => {
        return item.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    if (isSorted) sortList(arr);
    setItems(arr);
  }, [isSorted, searchQuery]);

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
            checked={isSorted}
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
