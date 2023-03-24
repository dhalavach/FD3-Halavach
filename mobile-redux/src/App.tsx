import './App.css';
import {PureTable} from './components/Table';
import data from './mockData.json';

function App() {
  return (
    <div className='App'>
      <PureTable data={data} />
    </div>
  );
}
 

export default App;