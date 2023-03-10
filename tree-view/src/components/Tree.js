import React, { useState, useEffect } from 'react';
import TreeNode from './TreeNode';
import '../App.css';

export default function Tree({ data, setListCb }) {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [showChildren, setShowChildren] = useState(false);
  const select = (l) => {
    setSelectedFolder(l);
    setShowChildren((showChildren) => !showChildren);
  };

  useEffect(() => {
    setListCb(data.filter((e) => e.name === selectedFolder));
  }, [selectedFolder]);

  return (
    <div className='container'>
      <section className='folders'>
        {data.map((e, i) => {
          return (
            <div className='node' key={i}>
              <TreeNode node={e} select={select}></TreeNode>

              <ul
                style={{ paddingLeft: '8px', borderLeft: '2px solid black' }}
                className='node'
              >
                {e.type === 'FOLDER' &&
                  e.name === selectedFolder &&
                  showChildren && (
                    <Tree data={e.children} setListCb={setListCb} />
                  )}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
