import { Product, RootState } from '../types/Types';
import { formatMoney } from '../util';
import { Fade, Zoom } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useDeferredValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../slices/cartProductsSlice';
import AddToCartButton from './AddToCartButton';
import AppPagination from './AppPagination';
import axios from 'axios';
import { setProducts } from '../slices/productsSlice';
import useSearchParamsState from '../hooks/useSearchParamsState';
import { setFilteredProducts } from '../slices/filteredProductsSlice';

export default function Table() {
  const dispatch = useDispatch();
  let products = useSelector((state: RootState) => state.products);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const cartProducts = useSelector((state: RootState) => state.cartProducts);
  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState(
    'searchQueryParam',
    ''
  );
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');
  const deferredSearchQueryParam = useDeferredValue(searchQueryParam);

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
    let arr = [...products] as Product[];
    if (filterParam)
      arr = arr.filter((p: Product) => p.itemType.includes(filterParam));
    if (sortParam) arr = sortProducts(sortParam, arr);
    if (deferredSearchQueryParam) {
      arr = arr.filter((p: Product) =>
        p.itemName
          .toLowerCase()
          .includes(deferredSearchQueryParam.toLowerCase())
      );
      console.log('searching...');
    }
    dispatch(setFilteredProducts(arr));
  }, [products, filterParam, deferredSearchQueryParam, sortParam]);

  const openModal = (product: Product): void => {
    setProductInModal(product);
  };

  const closeModal = (): void => {
    setProductInModal(null);
  };

  const add = (product: Product): void => {
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
      <AppPagination
        setDisplayedProducts={(products: Product[]) =>
          setDisplayedProducts(products)
        }
      />
      <ul className='products'>
        {displayedProducts?.map((product: Product) => {
          return (
            <li key={product.id}>
              <div
                className='product'
                data-testid='table__product'
                onClick={() => {
                  openModal(product);
                }}
              >
                <a href={'#' + product.id}>
                  <img src={product.itemImage} alt={product.itemImageAlt}></img>
                  <p>{product.itemName}</p>
                </a>
              </div>

              <div className='product-price'>
                <div>{formatMoney(product.itemPrice)}</div>
                <AddToCartButton add={add} product={product} />
              </div>
            </li>
          );
        })}
      </ul>
      <AppPagination
        setDisplayedProducts={(products: Product[]) =>
          setDisplayedProducts(products)
        }
      />
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
                    <AddToCartButton add={add} product={productInModal} />
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
