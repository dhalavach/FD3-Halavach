import React, { useState } from 'react';
import TreeNode from './TreeNode';
import '../App.css';

export default function Tree({ data }) {
  const select = (l) => {
    setSelectedFolders(l);
    setShowChildren(!showChildren);
  };

  const [selectedFolder, setSelectedFolders] = useState([]);
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div className='panels-container'>
      <section>
        {data.map((e, i) => {
          return (
            <div>
              
                <TreeNode node={e} key={i} select={select}></TreeNode>
                
              
            
            <ul style={{ paddingLeft: '8px', borderLeft: '2px solid black' }}>
            {showChildren && <Tree data={e.children} />  }
              </ul>
            </div>
          );
        })}
      </section>
      <h3> {selectedFolder}</h3>
    </div>
  );
}
