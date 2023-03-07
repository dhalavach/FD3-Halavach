import React from 'react';
import { createPortal } from 'react-dom';
import TreeNode from './TreeNode';

const filePanel=document.querySelector('.files-panel')

export default function FileList({ data }) {
  return (
    <div>
      {createPortal(
        <ul>
          {data.map((e, i) => {
            return <TreeNode node={e} key={i} />;
          })}
        </ul>,
        filePanel
      )}
    </div>
  );
}
