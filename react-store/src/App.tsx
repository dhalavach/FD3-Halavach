import './styles.css';
import data from './mockData.json';
import { useEffect, useState } from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import { Product } from './types/Types';
import Search from './components/Search';

function App() {
  const [products, setProducts] = useState<Product[]>(data.products);
  const [sort, setSort] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const sortProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  };

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const add = (product: Product) => {
    // let newCartProducts = [...cartProducts];
    // for (const cartItem of newCartProducts) {
    //   if (cartItem.id === product.id) cartItem.count += 1;
    // }
    // newCartProducts.push(product);
    // setCartProducts(newCartProducts);
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
      } else if (sort === 'az') {
        arr = arr.sort((a: Product, b: Product) => {
          return a.itemName.localeCompare(b.itemName);
        });
      } else if (sort === 'za') {
        arr = arr.sort((a: Product, b: Product) => {
          return -a.itemName.localeCompare(b.itemName);
        });
      }
    }

    if (searchQuery) {
      arr = arr.filter((product) => {
        return product.itemName
          .toString()
          .toLowerCase()
          .includes(searchQuery.toString().toLowerCase());
      });
    }
    setProducts(arr);
  }, [sort, type, searchQuery]);

  return (
    <div className='grid-container'>
      <header>
        <a href='/'>Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <div className='controls'>
              <div className='filter-order'>
                <Filter
                  count={products.length}
                  type={type}
                  sort={sort}
                  filter={filter}
                  sortProducts={sortProducts}
                />
              </div>
              <div className='search'>
                <Search
                  searchQuery={searchQuery}
                  searchProducts={searchProducts}
                />
              </div>
            </div>
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
