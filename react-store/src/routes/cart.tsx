import React, { useState } from 'react';
import Cart from '../components/Cart';
import { Product, orderObject } from '../types/Types';

export default function cart() {
  const [cartProducts, setCartProducts] = useState<Product[]>(
    localStorage.getItem('cartProducts')
      ? JSON.parse(localStorage.getItem('cartProducts') as string)
      : []
  );

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

  return (
    <Cart
      cartProducts={cartProducts}
      setCartProducts={setCartProducts}
      remove={remove}
      createOrder={createOrder}
    />
  );
}
