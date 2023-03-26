import './styles.css';
import data from './mockData.json';
import { useState } from 'react';
import Table from './components/Table';

function App() {
  const [products, setProducts] = useState(data.products);
  const [sort, setSort] = useState('');
  const [type, setType] = useState('');
  return (
    <div className='grid-container'>
      <header>
        <a href='/'>Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Table products={products} />
          </div>

          <div className='sidebar'>Items</div>
        </div>
      </main>
      <footer>2023</footer>
    </div>
  );
}

export default App;
