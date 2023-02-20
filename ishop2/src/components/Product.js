import React from 'react';

export default function Product({
  data,
  isActive,
  handleSelect,
  removeElement,
}) {
  const handleClick = (i) => {
    handleSelect(i);
  };

  const handleDelete = (i) => {
    removeElement(i);
  };

  return (
    <tr
      onClick={handleClick}
      className={isActive ? 'select-color' : 'primary-color'}
    >
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
      <button className='delete-button' onClick={handleDelete}>
        Delete
      </button>
    </tr>
  );
}
