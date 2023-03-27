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

  const handleFilterProducts = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setType(e.target.value);
  };
  const filterProducts = (type: string, arr: Product[]): Product[] => {
    if (type !== 'all')
      arr = arr.filter((product) => product.itemType === type);
    return arr;
  };

  const handleSortProducts = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSort(e.target.value);
  };
  const sortProducts = (sort: string, arr: Product[]): Product[] => {
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

    return arr;
  };

  const handleSearchProducts = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(e.target.value);
  };

  const searchProducts = (searchQuery: string, arr: Product[]): Product[] => {
    arr = arr.filter((product: Product) => {
      return product.itemName
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase());
    });
    return arr;
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
    let arr = [...data.products] as Product[];
    if (type) arr = filterProducts(type, arr);
    if (sort) arr = sortProducts(sort, arr);
    if (searchQuery) arr = searchProducts(searchQuery, arr);
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
                  handleFilterProducts={handleFilterProducts}
                  handleSortProducts={handleSortProducts}
                />
              </div>
              <div className='search'>
                <Search
                  searchQuery={searchQuery}
                  handleSearchProducts={handleSearchProducts}
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
