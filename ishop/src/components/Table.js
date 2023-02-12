import React from 'react';
import TableRow from './TableRow';
import TableHeadItem from './TableHeadItem';
import data from './mockData';

function Table() {
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
