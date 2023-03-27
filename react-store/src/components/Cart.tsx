import React from 'react';
import { Product } from '../types/Types';
import { formatMoney } from '../util';

export default function Cart(props: any) {
  const { cartProducts } = props;
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
                    <button className='btn' onClick={() => remove(product)}>
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
