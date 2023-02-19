import React from 'react';

function Product({ data, isActive, handleClick, removeElement }) {
  return (
    <tr
      onClick={handleClick}
      className={isActive ? 'select-color' : 'primary-color'}
    >
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
      <button className='delete-button' onClick={removeElement}>
        Delete
      </button>
    </tr>
  );
}

export default Product;
