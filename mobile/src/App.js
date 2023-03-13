import './App.css';
import Table from './components/Table';
import data from './mockData.json';

function App() {
  return (
    <div className='App'>
      <Table data={data} />
    </div>
  );
}

export default App;
