import React from 'react';

export default function Product({
  data,
  isActive,
  handleSelect,
  removeElement,
}) {
  const handleClick = () => {
    handleSelect();
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    removeElement();
  };

  return (
    <tr
      onClick={handleClick}
      className={isActive ? 'select-color' : 'primary-color'}
      key={data.id}
    >
      <td>{data.itemName}</td>
      <td>{data.itemPrice}</td>
      <td>{<img src={data.itemImageURL} alt={data.itemImageAlt} />}</td>
      <td>{data.itemQuantity}</td>
      <td>
        <button className='delete-button' onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
