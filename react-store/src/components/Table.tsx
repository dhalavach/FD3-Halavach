import { Product } from '../types/Types';
import { formatMoney } from '../util';
import { Fade, Zoom } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../slices/cartProductsSlice';
import AddToCartButton from './AddToCartButton';
import Pagination from '@mui/material/Pagination';
import AppPagination from './AppPagination';
import axios from 'axios';
import { setProducts } from '../slices/productsSlice';
import useSearchParamsState from '../hooks/useSearchParamsState';
import { setFilteredProducts } from '../slices/filteredProductsSlice';

export default function Table() {
  const dispatch = useDispatch();
  let products = useSelector((state: any) => state?.products);


  // const [page, setPage] = useState(1);
  // const handlePagination = (event: any, value: any) => {
  //   setPage(value);
  // };
  // const [displayedProducts, setDisplayedProducts] = useState([])

  const [displayedProducts, setDisplayedProducts] = useState([]);

  const cartProducts =  useSelector((state: any) => state.cartProducts);
  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState(
    'searchQueryParam',
    ''
  );
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');

  const fetchConfig = {
    PRODUCTS_URL: 'http://localhost:3000/products',
    ORDERS_URL: 'http://localhost:3000/orders',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  const loadProducts = async () => {
    try {
      const response = await axios.get(fetchConfig.PRODUCTS_URL);
      dispatch(setProducts(response.data));
      // setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

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

  useEffect(() => {
    let arr = [...products];
    if (filterParam) arr = arr.filter((p) => p.itemType.includes(filterParam));
    if (sortParam) arr = sortProducts(sortParam, arr);
    if (searchQueryParam)
      arr = arr.filter((p) =>
        p.itemName.toLowerCase().includes(searchQueryParam.toLowerCase())
      );
    dispatch(setFilteredProducts(arr));
  }, [products, filterParam, searchQueryParam, sortParam]);

  const openModal = (product: Product) => {
    setProductInModal(product);
  };

  const closeModal = () => {
    setProductInModal(null);
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
    dispatch(setCartProducts(newCartProducts));
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  };


  return (
    <div>
      {/* <Pagination count={10} page={page} onChange={handlePagination} /> */}
      <AppPagination
        setDisplayedProducts={(p: any) => setDisplayedProducts(p)}
      />
      <ul className='products'>
        {displayedProducts?.map((product: Product) => {
          return (
            <Fade key={product.id} direction={'up'} triggerOnce={true}>
              <li>
                <div
                  className='product'
                  data-testid='table__product'
                  onClick={() => {
                    openModal(product);
                  }}
                >
                  <a href={'#' + product.id}>
                    <img
                      src={product.itemImage}
                      alt={product.itemImageAlt}
                    ></img>
                    <p>{product.itemName}</p>
                  </a>
                </div>

                <div className='product-price'>
                  <div>{formatMoney(product.itemPrice)}</div>
                  <AddToCartButton
                    add={add}
                    product={product}
                    cartProducts={cartProducts}
                  />
                </div>
              </li>
            </Fade>
          );
        })}
      </ul>
      <div>
        {productInModal && (
          <div className='modal__wrapper' data-testid='table__modal'>
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
              <Zoom>
                <div className='modal__close-wrapper'>
                  <button
                    className='modal__close-modal'
                    onClick={closeModal}
                    data-testid='table__modal-close'
                  >
                    x
                  </button>
                </div>
                <div>
                  <div className='product'>
                    <div className='modal__image-description-wrapper'>
                      <div>
                        <img
                          src={productInModal.itemImage}
                          alt={productInModal.itemImageAlt}
                        ></img>{' '}
                      </div>
                      <div className='modal__description'>
                        <span className='modal__description'>
                          {productInModal?.itemDescription}
                        </span>
                      </div>
                    </div>
                    <p>{productInModal.itemName}</p>
                  </div>
                  <div className='product-price'>
                    <div>{formatMoney(productInModal.itemPrice)}</div>
                    <AddToCartButton
                      add={add}
                      product={productInModal}
                    />
                  </div>
                </div>
              </Zoom>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
