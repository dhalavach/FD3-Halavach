import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import TableHeadItem from './TableHeadItem';
import data from './mockData';

function Table() {
  Table.propTypes = {
    heading: PropTypes.string.isRequired,
    theadData: PropTypes.arrayOf(PropTypes.string),
    tbodyData: PropTypes.arrayOf(PropTypes.object),
  };

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
          {data.tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
