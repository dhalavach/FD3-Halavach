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

  const [filteredItems, setFilteredItems] = useState(mockData);
  const [sortingOrder, setSortingOrder] = useState(true);

  function filterSearch(event) {
    const query = event.target.value;
    let updatedList = [...mockData];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredItems(updatedList);
  }

  function listSort() {
    setSortingOrder(!sortingOrder);
    if (sortingOrder === true) {
      let sortedList = [...mockData];
      sortedList = sortedList.sort((a, b) => a.localeCompare(b));
      setFilteredItems(sortedList);
    } else {
      setFilteredItems(mockData);
    }
  }

  return (
    <div className='item-list'>
      <div className='search-header'>
        <div className='search-text'>Search:</div>
        <input id='search-box' onChange={filterSearch} />
        <div>
          <input type='checkbox' id='sort' name='sort' onChange={listSort} />
          <label for='sort'>Sort list</label>{' '}
        </div>
      </div>
      <div id='item-list'>
        <ol>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
