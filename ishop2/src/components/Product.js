import React from 'react';

export default function Product({
  data,
  isActive,
  handleClick,
  removeElement,
}) {
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
