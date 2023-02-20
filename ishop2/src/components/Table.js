import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import data from './mockData';

export default function Table() {
  Table.propTypes = {
    heading: PropTypes.string.isRequired,
    theadData: PropTypes.arrayOf(PropTypes.string),
    tbodyData: PropTypes.arrayOf(PropTypes.object),
  };

  const [items, setItems] = useState(data.tbodyData);
  const [activeIndex, setActiveIndex] = useState(0);

  function remove(index) {
    const newItems = items.filter((item) => item.id !== index);
    setItems(newItems);
  }

  return (
    <div>
      <h1>{data.heading}</h1>
      <table className='customTable'>
        <thead>
          <tr>
            {data.theadData.map((h) => {
              return <td title={h}>{h}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <Product
                key={item.id}
                data={item.items}
                isActive={activeIndex === item.id}
                handleSelect={() => setActiveIndex(item.id)}
                removeElement={(event) => {
                  event.stopPropagation();
                  remove(item.id);
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
