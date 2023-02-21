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
  const [sorted, setSorted] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  function filterSearch(event) {
    const query = event.target.value;
    setSearchQuery(query);
    let updatedList = [...mockData];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
    setItems(updatedList);
  }

  function listSort() {
    setSorted(!sorted);
    if (sorted) {
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
  }

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input id='search-box' onChange={filterSearch} />
        <div>
          <input type='checkbox' id='sort' name='sort' onChange={listSort} />
          <label htmlFor='sort'>Sort list alphabetically </label>
        </div>
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
