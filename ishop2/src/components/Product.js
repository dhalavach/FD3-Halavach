import React from 'react';

function Product({ data, isActive, handleClick }) {
  return (
    <tr
      onClick={handleClick}
      className={isActive ? 'select-color' : 'primary-color'}
    >
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}

export default Product;
