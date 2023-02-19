import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import TableHeadItem from './TableHeadItem';
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
    let newItems = items.filter((item) => item.id !== index);
    setItems(newItems);
  }

  return (
    <div>
      <h1>{data.heading}</h1>
      <table className='customTable'>
        <thead>
          <tr>
            {data.theadData.map((h) => {
              return <TableHeadItem key={h} item={h} />;
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
                handleClick={() => setActiveIndex(item.id)}
                removeElement={() => remove(item.id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
