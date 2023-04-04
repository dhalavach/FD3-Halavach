import { useEffect, useState } from 'react';
import { Product } from '../types/Types';
import { useSelector } from 'react-redux';

export default function AddToCartButton(props: any) {
  const { add, product } = props;
  const [inCart, setInCart] = useState(false);

  const checkIfInCart = (product: Product): boolean => {
    return cartProducts.findIndex((p: Product) => p.id === product.id) !== -1;
  };

  const cartProducts = useSelector((state: any) => state.cartProducts);

  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cartProducts]);

  return (
    <button
      className={`btn ${
        inCart ? 'table__button-in-cart' : 'table__button-add'
      }`}
      onClick={() => add(product)}
    >
      {inCart ? 'Product in Cart' : 'Add to Cart'}
    </button>
  );
}
