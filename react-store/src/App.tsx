import './styles.css';
import { useEffect, useState } from 'react';
import Fade from 'react-awesome-reveal';
import axios from 'axios';

import Table from './components/Table';
import Filter from './components/Filter';
import { orderObject, Product } from './types/Types';
import Search from './components/Search';
import Cart from './components/Cart';
import { Link, useSearchParams } from 'react-router-dom';
import useSearchParamsState from './components/hooks/useSearchParamsState';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>(
    localStorage.getItem('cartProducts')
      ? JSON.parse(localStorage.getItem('cartProducts') as string)
      : []
  );
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    type: '',
    searchQuery: '',
    sort: '',
  });
  const [type, setType] = useSearchParamsState('type', '');
  const [searchQuery, setSearchQuery] = useSearchParamsState('searchQuery', '');
  const [sort, setSort] = useSearchParamsState('sort', '');

  const fetchConfig = {
    URL: 'http://localhost:3000/products',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  const loadData = async () => {
    try {
      const response = await axios.get(fetchConfig.URL);
      setProducts(response.data);
      setAllProducts(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFilterProducts = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setType(e.target.value);
    // searchParams.set('type': e.target.value );
    // setSearchParams({ type: e.target.value });
  };
  const filterProducts = (type: string, arr: Product[]): Product[] => {
    arr = arr.filter((product) => product.itemType.includes(type));
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
    // setSearchParams({ search: e.target.value });
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
    let newCartProducts = [...cartProducts];
    let inCart = false;
    for (const cartItem of newCartProducts) {
      if (cartItem.id === product.id) {
        if (cartItem.count) cartItem.count += 1;
        inCart = true;
      }
    }
    if (!inCart) {
      newCartProducts.push({ ...product, count: 1 });
    }
    setCartProducts(newCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  };

  const remove = (product: Product) => {
    let newCartProducts = [...cartProducts].filter(
      (item) => item.id !== product.id
    );
    setCartProducts(newCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  };

  const createOrder = (order: orderObject) => {
    alert(
      `saving order for ${order.name.toString()} - to be implemented later...`
    );
    console.log(order);
  };

  // useEffect(() => {
  //   let arr = [...allProducts];
  //   if (type) arr = filterProducts(type, arr);
  //   if (sort) arr = sortProducts(sort, arr);
  //   if (searchQuery) arr = searchProducts(searchQuery, arr);
  //   setProducts(arr);
  // }, [type, searchQuery, sort]);

  useEffect(() => {
    let arr = [...allProducts];
    if (sort) arr = sortProducts(sort, arr);
    setProducts(arr);
  }, [sort]);

  return (
    <div className='wrapper'>
      <div className='grid-container'>
        <header className='header'>
          <Link to={'/about'}>About</Link>
          <h1>Super-Duper Computer Store</h1>
          <Link to={'/cart'}>Cart</Link>
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
              <Table
                products={products.filter(
                  (p) =>
                    p.itemType.includes(searchParams.get('type') as string) &&
                    p.itemName
                      .toLowerCase()
                      .includes(
                        (
                          searchParams.get('searchQuery') as string
                        ).toLowerCase()
                      )
                )}
                add={add}
              />
            </div>

            <div className='sidebar'>
              <Cart
                cartProducts={cartProducts}
                remove={remove}
                createOrder={createOrder}
                setCartProducts={setCartProducts}
              />
            </div>
          </div>
        </main>
        <footer>2023</footer>
      </div>
    </div>
  );
}

export default App;
