import React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TreeNode from './TreeNode';

export default function FileList({ data }) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <div>
      {domReady
        ? createPortal(
            <ul>
              {data.map((e, i) => {
                return <TreeNode node={e} key={i} />;
              })}
            </ul>,
            document.querySelector('.files-panel')
          )
        : null}
    </div>
  );
}
