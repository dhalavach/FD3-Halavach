import Filter from './components/Filter';
import './App.css';
import mockData from './assets/mockData.json';

function App() {
  return (
    <div className='App'>
      <Filter data={mockData} />
    </div>
  );
}

export default App;
