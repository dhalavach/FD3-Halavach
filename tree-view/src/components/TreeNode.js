import React, { useState } from 'react';
import Tree from './Tree';

export default function TreeNode({ node }) {
  const { children, name, type } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = (e) => {
    if (e.target.dataset.type === 'FOLDER') setShowChildren(!showChildren);
  };
  return (
    <div>
      <div onClick={handleClick} style={{ margin: '8px' }}>
        <span data-type={type}>{name}</span>
      </div>
      <ul style={{ paddingLeft: '8px', borderLeft: '2px solid black' }}>
        {showChildren && <Tree data={children} />}
      </ul>

    </div>
    
  );
}
