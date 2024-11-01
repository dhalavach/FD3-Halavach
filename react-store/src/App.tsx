import './styles.css';
import { useEffect, useState, Suspense } from 'react';
import Filter from './components/Filter';
import Search from './components/Search';
import Cart from './components/Cart';
import { Link } from 'react-router-dom';
import Spinner from './components/Spinner';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  //adaptive
  const TABLETWIDTH = 768;
  const [matches, setMatches] = useState(window.matchMedia(`(min-width: ${TABLETWIDTH}px)`).matches);

  useEffect(() => {
    function set(e: any): any {
      setMatches(e.matches);
    }
    window.matchMedia(`(min-width: ${TABLETWIDTH}px)`).addEventListener('change', set);
    return function cleanup() {
      window.removeEventListener('change', set);
    };
  }, []);

  return (
    <div className='wrapper'>
      <div className='grid-container'>
        <header className='header'>
          <Link to={'/about'} className={`${matches ? 'app__link-about-desktop' : 'app__link-about-tablet'}`}>
            About
          </Link>
          <div className={`${matches ? 'app__heading-desktop' : 'app__heading-tablet'}`}>
            <h1>Computer Store</h1>
          </div>
          <Link to={'/ordersList'} className={`${matches ? 'app__link-cart-desktop' : 'app__link-cart-tablet'}`}>
            Orders
          </Link>
          <Link to={'/cart'} className={`${matches ? 'app__link-cart-desktop' : 'app__link-cart-tablet'}`}>
            Cart
          </Link>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <div className={`${matches ? 'controls' : 'controls-tablet'}`}>
                <div className='filter-order'>
                  <Filter />
                </div>
                <div className='search'>
                  <Search />
                </div>
              </div>
              <div>
                <Suspense fallback={<Spinner />}>
                  <Table />
                </Suspense>
              </div>
            </div>

            <div className={`sidebar ${matches ? '' : 'hidden'}`}>
              <Cart />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
