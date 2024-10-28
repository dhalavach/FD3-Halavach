import { useEffect, useState, ReactElement } from 'react';
import { Product, RootState } from '../types/Types';
import { useSelector } from 'react-redux';

export default function AddToCartButton(props: { add: (product: Product) => void; product: Product }): ReactElement {
  const { add, product } = props;
  const [inCart, setInCart] = useState(false);
  const cartProducts = useSelector((state: RootState) => state.cartProducts);
  const checkIfInCart = (product: Product): boolean =>
    cartProducts.some((cartProduct: Product) => cartProduct.id === product.id);
  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cartProducts, product]);

  return (
    <button
      className={`btn ${inCart ? 'table__button-in-cart' : 'table__button-add'}`}
      onClick={() => add(product)}
      data-testid='add-to-cart-button'
    >
      {inCart ? 'Product in Cart' : 'Add to Cart'}
    </button>
  );
}
