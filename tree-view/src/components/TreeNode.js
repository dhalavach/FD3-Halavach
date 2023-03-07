import React, { useState } from 'react';
import Tree from './Tree';
import FileList from './FileList'

export default function TreeNode({ node }) {
  const { children, name, type } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = (e) => {
    if (e.target.dataset.type === 'FOLDER') setShowChildren(!showChildren);
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
    <div>
      <div
        className='node-wrapper'
        onClick={handleClick}
        style={{ margin: '8px' }}
      >
        <span data-type={type}>{name}</span>
      </div>
      <ul style={{ paddingLeft: '8px', borderLeft: '2px solid black' }}>
        {showChildren && (checkType(children)? <Tree data={children} /> : <FileList data={children} /> )}
      </ul>
    </div>
  );
}
