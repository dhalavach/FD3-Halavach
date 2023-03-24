import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setClients } from './components/clientsSlice';
import { setDisplayedClients } from './components/displayedClientsSlice';
import { PureTable } from './components/Table';
import data from './mockData.json';

function App() {
  return (
    <div className='App'>
      <PureTable data={data} />
    </div>
  );
}

export default App;
