import React, { useState } from 'react';
import TreeNode from './TreeNode';
import '../App.css';

export default function Tree({ data }) {
  const select = (l) => {
    setSelectedFolders(l);
    setShowChildren(!showChildren);
    console.log(selectedFolder)
  };

  const [selectedFolder, setSelectedFolders] = useState([]);
  const [showChildren, setShowChildren] = useState(false);

  function checkType(arr) {
    if (
      arr.every((node) => {
        return node.type === 'FOLDER';
      })
    )
      return true;
  }

  return (
    <div className='panels-container'>
      <section>
        {data.map((e, i) => {
          return (
            <div className="node">
              <TreeNode node={e} key={i} select={select}></TreeNode>

              <ul style={{ paddingLeft: '8px', borderLeft: '2px solid black' }} className="node">
                {e.name === selectedFolder && showChildren &&  <Tree data={e.children} />}
              </ul>
            </div>
          );
        })}
      </section>
      
    </div>
  );
}
