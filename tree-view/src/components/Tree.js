import React from 'react';
import TreeNode from './TreeNode';


export default function Tree({ data }) {
  return (
    <ul>
      {data.map((e, i) => {
         return <TreeNode node={e} key={i} />;
      })}
    </ul>
  );
}
