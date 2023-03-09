import './App.css';
import { useState } from 'react';
import Tree from './components/Tree';
import FileList from './components/FileList';
import mockData from './mockData';

function App() {
  const [list, setList] = useState([]);



  return (
    <div className='Tree-View-App'>
      <h1>Tree View</h1>
      <div className='panels-container'>
        <section>
          <Tree data={[mockData]} setListCb={(l) => {setList(l)}} />
        </section>
        <section>
          <FileList data={list || []} />
        </section>
      </div>
    </div>
  );
}

export default App;
