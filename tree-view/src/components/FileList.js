import React from 'react';
import TreeNode from './TreeNode';

export default function FileList({ data = [] }) {
  return (
    <div>
      <ul>
        {data.map((e, i) => {
          if (e.type === 'FILE') return <TreeNode node={e} key={i} />;
        })}
      </ul>
    </div>
  );
}
