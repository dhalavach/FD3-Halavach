import './App.css';
import Tree from './components/Tree';

const mockData = {
  name: 'tree',
  type: 'FOLDER',
  children: [
    { name: 'folder1', type: 'FOLDER', children: [] },
    {
      name: 'folder2',
      type: 'FOLDER',
      children: [
        {
          name: 'folder21',
          type: 'FOLDER',
          children: [
            { name: 'file211', type: 'FILE' },
            { name: 'file212', type: 'FILE' },
            { name: 'file213', type: 'FILE' },
          ],
        },
        { name: 'folder22', type: 'FOLDER', children: [] },
      ],
    },
    {
      name: 'folder3',
      type: 'FOLDER',
      children: [{ name: 'file31', type: 'FILE' }],
    },
  ],
};

function App() {
  return (
    <div className="Tree-View-App">
      <h1>Tree View</h1>
      <Tree data={[mockData]} />
    </div>
  );
}

export default App;
