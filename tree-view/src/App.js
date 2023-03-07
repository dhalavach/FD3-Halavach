import './App.css';
import Tree from './components/Tree';
import mockData from './mockData';

function App() {
  return (
    <div className='Tree-View-App'>
      <h1>Tree View</h1>
      <div className='panels-container'>
        <section className='tree-panel'>
          <h3>Folder Tree</h3>
          <Tree data={[mockData]} />
        </section>

        <section className='files-panel'>
          <h3>Files</h3>
        </section>
      </div>
    </div>
  );
}

export default App;
