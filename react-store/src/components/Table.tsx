import { Product } from '../types/Types';
import { formatMoney } from '../util';
import { Fade, Zoom } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../slices/cartProductsSlice';

export default function Table(props: any) {
  const { products } = props;
  const dispatch = useDispatch();

  const cartProducts = localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts') as string)
    : useSelector((state: any) => state.cartProducts);
  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setProductInModal(product);
  };

  const closeModal = () => {
    setProductInModal(null);
  };

  const addToCart = (product: Product) => {
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

  const checkIfInCart = (product: Product): boolean => {
    return cartProducts.findIndex((p: Product) => p.id === product.id) !== -1;
  };
  return (
    <div>
      <ul className='products'>
        {products?.map((product: Product) => {
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
                  <button
                    className={`btn ${
                      checkIfInCart(product)
                        ? 'table__button-in-cart'
                        : 'table__button-add'
                    }`}
                    onClick={() => addToCart(product)}
                  >
                    {checkIfInCart(product) ? 'Product in Cart' : 'Add to Cart'}
                  </button>
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
                    <button
                      className={`btn ${
                        checkIfInCart(productInModal)
                          ? 'table__button-in-cart'
                          : 'table__button-add'
                      }`}
                      onClick={() => addToCart(productInModal)}
                    >
                      {checkIfInCart(productInModal)
                        ? 'Product in Cart'
                        : 'Add to Cart'}
                    </button>
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
