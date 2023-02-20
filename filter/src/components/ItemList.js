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
  const [sortingOrder, setSortingOrder] = useState(true);

  function filterSearch(event) {
    const query = event.target.value;
    let updatedList = [...mockData];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
    setItems(updatedList);
  }

  function listSort() {
    setSortingOrder(!sortingOrder);
    if (sortingOrder === true) {
      let sortedList = [...items];
      sortedList = sortedList.sort((a, b) => a.localeCompare(b));
      setItems(sortedList);
    } else {
      setItems(mockData);
    }
  }

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input id='search-box' onChange={filterSearch} />
        <div>
          <input type='checkbox' id='sort' name='sort' onChange={listSort} />
          <label for='sort'>Sort list alphabetically  </label>{' '}
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
