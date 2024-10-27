import { useState, useEffect, useCallback, Fragment } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Product, RootState } from '../types/Types';
import { formatMoney } from '../util';
import CheckoutForm from './CheckoutForm';
import { useSelector, useDispatch } from 'react-redux';
import { setCartProducts } from '../slices/cartProductsSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cartProducts);

  const [checkoutFormOpen, setCheckoutFormOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<number | null>(null);

  // Load cart products from localStorage on component mount
  useEffect(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
      dispatch(setCartProducts(JSON.parse(storedCartProducts)));
    }
  }, [dispatch]);

  // Set new cart products in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    if (cartProducts.length === 0) setCheckoutFormOpen(false);
  }, [cartProducts]);

  // Removes a product from cart
  const removeProduct = useCallback(
    (productId: number) => {
      const updatedCartProducts = cartProducts.filter((item: Product) => item.id !== productId);
      dispatch(setCartProducts(updatedCartProducts));
    },
    [cartProducts, dispatch]
  );

  const handleRemoveClick = (product: Product) => {
    setProductToRemove(product.id);
    setTimeout(() => {
      removeProduct(product.id);
      setProductToRemove(null);
    }, 1000);
  };

  // Calculate total cart amount
  const calculateTotal = () =>
    cartProducts.reduce((total: number, product: Product) => total + product.count * product.itemPrice, 0);

  return (
    <Fragment>
      <div className='cart-header'>
        {cartProducts.length === 0 ? 'Empty' : `${cartProducts.length} product(s) in cart`}
      </div>

      {cartProducts.length > 0 && (
        <div>
          <ul className='cart-products'>
            {cartProducts.map((product: Product) => (
              <Fade key={product.id} direction='left' triggerOnce>
                <li className={product.id === productToRemove ? 'removing' : ''}>
                  <img src={product.itemImage} alt={product.itemImageAlt} />
                  <div>{product.itemName}</div>
                  <div className='right'>
                    {`${formatMoney(product.itemPrice)} x ${product.count}`}
                    <button className='cart__button-remove' onClick={() => handleRemoveClick(product)}>
                      Remove
                    </button>
                  </div>
                </li>
              </Fade>
            ))}
          </ul>

          <div className='cart__total'>Total: {formatMoney(calculateTotal())}</div>
          <button className='btn primary' onClick={() => setCheckoutFormOpen(true)}>
            Checkout
          </button>
        </div>
      )}

      {checkoutFormOpen && <CheckoutForm setCheckoutFormOpen={setCheckoutFormOpen} />}
    </Fragment>
  );
}
