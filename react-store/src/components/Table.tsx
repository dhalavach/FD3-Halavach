import { Product, RootState, SortingFunction, SortStrategy, ProductListProps, ProductModalProps } from '../types/Types';
import { formatMoney } from '../util';
import { Fade, Zoom } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useDeferredValue, useEffect, useState, startTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../slices/cartProductsSlice';
import AddToCartButton from './AddToCartButton';
import AppPagination from './AppPagination';
import axios from 'axios';
import { setProducts } from '../slices/productsSlice';
import useSearchParamsState from '../hooks/useSearchParamsState';
import { setFilteredProducts } from '../slices/filteredProductsSlice';
import useDebounce from '../hooks/useDebounce';
import { getProducts } from '../services/api';

export default function Table() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const cartProducts = useSelector((state: RootState) => state.cartProducts);

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState('searchQueryParam', '');
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');
  const debouncedSearchQueryParam = useDebounce<string>(searchQueryParam, 500);

  const loadProducts = async () => {
    try {
      const { data } = await getProducts();
      dispatch(setProducts(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = applyFilters(products);
    dispatch(setFilteredProducts(filteredProducts));
  }, [products, filterParam, debouncedSearchQueryParam, sortParam]);

  const applyFilters = (products: Product[]): Product[] => {
    let result = [...products];
    if (filterParam) result = filterByType(result, filterParam);
    if (sortParam) result = sortProducts(result, sortParam);
    if (debouncedSearchQueryParam) result = searchByName(result, debouncedSearchQueryParam);
    return result;
  };

  const filterByType = (products: Product[], filter: string) => products.filter((p) => p.itemType.includes(filter));

  const sortProducts = (products: Product[], sortOrder: string): Product[] => {
    const sortStrategies: SortStrategy = {
      ascending: (a: Product, b: Product) => a.itemPrice - b.itemPrice,
      descending: (a: Product, b: Product) => b.itemPrice - a.itemPrice,
      az: (a: Product, b: Product) => a.itemName.localeCompare(b.itemName),
      za: (a: Product, b: Product) => b.itemName.localeCompare(a.itemName),
    };
    return products.sort(sortStrategies[sortOrder] || (() => 0));
  };

  const searchByName = (products: Product[], query: string) =>
    products.filter((p) => p.itemName.toLowerCase().includes(query.toLowerCase()));

  const addToCart = (product: Product) => {
    const updatedCart = updateCart(cartProducts, product);
    dispatch(setCartProducts(updatedCart));
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
  };

  const updateCart = (cart: Product[], product: Product): Product[] => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.count = (existingProduct.count || 1) + 1;
      return [...cart];
    }
    return [...cart, { ...product, count: 1 }];
  };

  const openModal = (product: Product) => setProductInModal(product);
  const closeModal = () => setProductInModal(null);

  return (
    <div>
      <AppPagination setDisplayedProducts={setDisplayedProducts} />
      <ProductList products={displayedProducts} onProductClick={openModal} onAddToCart={addToCart} />
      <AppPagination setDisplayedProducts={setDisplayedProducts} />
      <ProductModal product={productInModal as Product} onClose={closeModal} onAddToCart={addToCart} />
    </div>
  );
}

const ProductList = ({ products, onProductClick, onAddToCart }: ProductListProps) => (
  <ul className='products'>
    {products.map((product: Product) => (
      <li key={product.id}>
        <div className='product' data-testid='table__product' onClick={() => onProductClick(product)}>
          <a href={'#' + product.id}>
            <img src={product.itemImage} alt={product.itemImageAlt} />
            <p>{product.itemName}</p>
          </a>
        </div>
        <div className='product-price'>
          <div>{formatMoney(product.itemPrice)}</div>
          <AddToCartButton add={onAddToCart} product={product} />
        </div>
      </li>
    ))}
  </ul>
);

const ProductModal = ({ product, onClose, onAddToCart }: ProductModalProps) =>
  product && (
    <div className='modal__wrapper' data-testid='table__modal'>
      <Modal isOpen onRequestClose={onClose} ariaHideApp={false}>
        <Zoom>
          <div className='modal__close-wrapper'>
            <button className='modal__close-modal' onClick={onClose} data-testid='table__modal-close'>
              x
            </button>
          </div>
          <div>
            <div className='product'>
              <div className='modal__image-description-wrapper'>
                <div>
                  <img src={product.itemImage} alt={product.itemImageAlt} />
                </div>
                <div className='modal__description'>
                  <span className='modal__description'>{product.itemDescription}</span>
                </div>
              </div>
              <p>{product.itemName}</p>
            </div>
            <div className='product-price'>
              <div>{formatMoney(product.itemPrice)}</div>
              <AddToCartButton add={onAddToCart} product={product} />
            </div>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
