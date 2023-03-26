import './styles.css';
import data from './mockData.json';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  const [products, setProducts] = useState(data.products);
  const [sort, setSort] = useState('');
  const [type, setType] = useState('');

  const filter = (e) => {
    setType(e.target.value);
  };

  const sortProducts = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    let arr = [...data.products];
    if (type) {
      if (type !== 'all') {
        arr = arr.filter((product) => product.itemType === type);
      }
    }
    if (sort) {
      if (sort === 'ascending') {
        arr = arr.sort((a, b) => a.itemPrice - b.itemPrice);
      } else if (sort === 'descending') {
        arr = arr.sort((a, b) => b.itemPrice - a.itemPrice);
      }
    }
    setProducts(arr);
  }, [sort, type]);

  return (
    <div className='grid-container'>
      <header>
        <a href='/'>Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Filter
              count={products.length}
              type={type}
              sort={sort}
              filter={filter}
              sortProducts={sortProducts}
            />
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
