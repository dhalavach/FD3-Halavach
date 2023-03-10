import React from 'react';

export default function TreeNode({ node, select }) {
  const { children, name, type } = node;


  const handleClick = (e) => {
    //if (e.target.dataset.type === 'FOLDER') setShowChildren(!showChildren);
    select(e.target.dataset.name);
  };



  return (
    <span
      className='node'
      onClick={handleClick}
      style={{ margin: '8px' }}
      data-type={type}
      data-name={name}
      key={name}
    >
      {name}
    </span>
  );
}
