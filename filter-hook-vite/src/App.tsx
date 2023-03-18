import Filter from './components/Filter';
import './App.css';

function App() {
  const mockData = [
    'california',
    'everything',
    'aboveboard',
    'washington',
    'basketball',
    'weathering',
    'characters',
    'literature',
    'contraband',
    'appreciate',
  ];

  return (
    <div className='App'>
      <Filter data={mockData} />
    </div>
  );
}

export default App;
