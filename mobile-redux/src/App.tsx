import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setClients } from './components/clientsSlice';
import { setDisplayedClients } from './components/displayedClientsSlice';
import { PureTable } from './components/Table';
import data from './mockData.json';

function App() {
  const dispatch = useDispatch();


  let clients = useSelector((state) => state.clients);
  let displayedClients = useSelector((state) => state.displayedClients);
  return (
    <div className='App'>
      <PureTable
        data={data}
        clients={clients}
        displayedClients={displayedClients}
      />
    </div>
  );
}

export default App;
