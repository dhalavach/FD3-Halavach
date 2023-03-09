import React, { useState, useEffect } from 'react';
import TreeNode from './TreeNode';
import '../App.css';

export default function Tree({ data, setListCallback }) {
  const [selectedFolder, setSelectedFolders] = useState('');
  const [showChildren, setShowChildren] = useState(false);
  const select = (l) => {
    setSelectedFolders(l);
    setShowChildren(!showChildren);
    setListCallback(data.filter((e) => e.name === selectedFolder));

    console.log(selectedFolder);
  };

  // useEffect(() => {
  //   setListCallback(data.filter((e) => e.name === selectedFolder));
  // }, [selectedFolder]);

  function checkType(arr) {
    if (
      arr.every((node) => {
        return node.type === 'FOLDER';
      })
    )
      return true;
  }

  return (
    <div className='container'>
      <section className='folders'>
        {data.map((e, i) => {
          return (
            <div className='node'>
              <TreeNode node={e} key={i} select={select}></TreeNode>

              <ul
                style={{ paddingLeft: '8px', borderLeft: '2px solid black' }}
                className='node'
              >
                {e.type === 'FOLDER' &&
                  e.name === selectedFolder &&
                  showChildren && <Tree data={e.children} setListCallback={ setListCallback} />}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
