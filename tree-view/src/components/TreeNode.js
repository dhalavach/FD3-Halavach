import React, { useState } from 'react';
import Tree from './Tree'

export default function TreeNode({ node }) {
  const { children, name } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div>
      <div onClick={handleClick} style={{ margin: '8px' }}>
        <span>{name}</span>
      </div>
      <ul style={{ padding: '8px', borderLeft: '2px solid black' }}>
        {showChildren && <Tree data={children} />}
      </ul>
    </div>
  );
}
