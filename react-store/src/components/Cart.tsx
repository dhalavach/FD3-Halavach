import React, { useState } from 'react';
import { Product } from '../types/Types';
import { formatMoney } from '../util';
import CheckoutForm from './CheckoutForm';

export default function Cart(props: any) {
  const { cartProducts, remove, createOrder } = props;

  const [checkoutFormOpen, setCheckoutFormOpen] = useState(false);

  const order = (orderObj: any) => {
    createOrder({ ...orderObj, products: cartProducts });
  };

  return (
    <>
      <div>
        {cartProducts.length === 0 ? (
          <div className='cart cart-header'>Empty</div>
        ) : (
          <div className='cart cart-header'>
            {cartProducts.length} product(s) in cart
          </div>
        )}
      </div>
      {cartProducts.length > 0 && (
        <div>
          <div className='cart'>
            <ul className='cart-products'>
              {cartProducts.map((product: Product) => {
                return (
                  <li key={product.id}>
                    <div>
                      <img
                        src={product.itemImage}
                        alt={product.itemImageAlt}
                      ></img>
                    </div>
                    <div>{product.itemName}</div>
                    <div className='right'>
                      {`${formatMoney(product.itemPrice)} x  ${product?.count}`}
                      <button
                        className='cart__button-remove'
                        onClick={() => remove(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='cart__total'>
            <div>
              Total:
              {cartProducts.reduce(
                (acc: number, curr: Product) =>
                  acc + Number(curr?.count) * curr.itemPrice,
                0
              )}
            </div>
          </div>
          <button
            className='btn primary'
            onClick={() => setCheckoutFormOpen(true)}
          >
            Checkout
          </button>
        </div>
      )}
      {checkoutFormOpen && <CheckoutForm order={order} />}
    </>
  );
}
