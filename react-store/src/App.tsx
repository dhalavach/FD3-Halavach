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
import useSearchParamsState from './hooks/useSearchParamsState';

import { useSelector, useDispatch } from 'react-redux';
import { setType } from './slices/typeSlice';
import { setSearchQuery } from './slices/searchQuerySlice';
import { setSort } from './slices/sortSlice';
import { setProducts } from './slices/productsSlice';
import { setCartProducts } from './slices/cartProductsSlice';
import AppPagination from './components/AppPagination';

function App() {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState<Product[]>([]);
  // const [allProducts, setAllProducts] = useState<Product[]>([]);
  // const [cartProducts, setCartProducts] = useState<Product[]>(
  //   localStorage.getItem('cartProducts')
  //     ? JSON.parse(localStorage.getItem('cartProducts') as string)
  //     : []
  // );
  // let type = useSelector((state: any) => state?.type);
  // let searchQuery = useSelector((state: any) => state?.searchQuery);
  // let sort = useSelector((state: any) => state?.sort);
  const cartProducts = useSelector((state: any) => state.cartProducts);
  let products = useSelector((state: any) => state?.products);

  const [dataLoaded, setDataLoaded] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams({
  //   filterParam: '',
  //   searchQueryParam: '',
  //   sortParam: '',
  // });
  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState(
    'searchQueryParam',
    ''
  );
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');

  const [displayedProducts, setDisplayedProducts] = useState([]);

  // load data
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
      console.log(response);
      dispatch(setProducts(response.data));
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // useEffect(() => {
  //   setFilterParam(type);
  // }, [type]);

  // useEffect(() => {
  //   setSearchQueryParam(searchQuery);
  // }, [searchQuery]);

  // useEffect(() => {
  //   dispatch(setSortParam());
  // }, [sortParam]);

  //adaptive
  const TABLETWIDTH = 768;
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${TABLETWIDTH}px)`).matches
  );

  useEffect(() => {
    function set(e: any): any {
      setMatches(e.matches);
    }
    window
      .matchMedia(`(min-width: ${TABLETWIDTH}px)`)
      .addEventListener('change', set);
    return function cleanup() {
      window.removeEventListener('change', set);
    };
  }, []);

  //filtering

  //sorting

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

  //search

  const searchProducts = (searchQuery: string, arr: Product[]): Product[] => {
    arr = arr.filter((product: Product) => {
      return product.itemName
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase());
    });
    return arr;
  };

  //add

  //remove

  //create order

  // useEffect(() => {
  //   let arr = [...allProducts];
  //   if (type) arr = filterProducts(type, arr);
  //   if (sort) arr = sortProducts(sort, arr);
  //   if (searchQuery) arr = searchProducts(searchQuery, arr);
  //   setProducts(arr);
  // }, [type, searchQuery, sort]);

  // useEffect(() => {
  //   let arr = [...allProducts];
  //   if (sort) arr = sortProducts(sort, arr);
  //   setProducts(arr);
  // }, [sort]);

  return (
    <div className='wrapper'>
      <div className='grid-container'>
        <header className='header'>
          <Link
            to={'/about'}
            className={`${
              matches ? 'app__link-about-desktop' : 'app__link-about-tablet'
            }`}
          >
            About
          </Link>
          <div
            className={`${
              matches ? 'app__heading-desktop' : 'app__heading-tablet'
            }`}
          >
            <h1>Computer Store</h1>
          </div>
          <Link
            to={'/cart'}
            className={`${
              matches ? 'app__link-cart-desktop' : 'app__link-cart-tablet'
            }`}
          >
            Cart
          </Link>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <div className='controls'>
                <div className='filter-order'>
                  <Filter />
                </div>
                <div className='search'>
                  <Search />
                </div>
              </div>
              <div>
                <AppPagination
                  setDisplayedProducts={(p: any) => setDisplayedProducts(p)}
                />

                {!dataLoaded ? 'Loading...' : ''}
                <Table
                  // products={sortProducts(
                  //   sortParam,
                  //   products.filter(
                  //     (p: Product) =>
                  //       p.itemType
                  //         .toLowerCase()
                  //         .includes(filterParam?.toLowerCase()) &&
                  //       p.itemName
                  //         .toLowerCase()
                  //         .includes(searchQueryParam?.toLowerCase())
                  //   )
                  // )}
                  products={displayedProducts}
                />
              </div>
            </div>

            <div className={`sidebar ${matches ? '' : 'hidden'}`}>
              <Cart />
            </div>
          </div>
        </main>
        <footer>2023</footer>
      </div>
    </div>
  );
}

export default App;
