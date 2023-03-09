import React from 'react';

export default function TreeNode({ node, select }) {
  const { children, name, type } = node;


  const handleClick = (e) => {
    //if (e.target.dataset.type === 'FOLDER') setShowChildren(!showChildren);
    select(e.target.dataset.name);
  };

  function checkType(arr) {
    if (
      arr.every((node) => {
        return node.type === 'FOLDER';
      })
    )
      return true;
  }

  return (
    <span
      className='node-wrapper'
      onClick={handleClick}
      style={{ margin: '8px' }}
      data-type={type}
    >
      {name}
    </span>
  );
}
