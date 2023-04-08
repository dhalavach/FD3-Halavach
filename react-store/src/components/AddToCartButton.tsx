import { useEffect, useState, ReactElement } from "react";
import { Product, RootState } from "../types/Types";
import { useSelector } from "react-redux";

export default function AddToCartButton(props: {
  add: (product: Product) => void;
  product: Product;
}) {
  const { add, product } = props;
  const [inCart, setInCart] = useState(false);
  const cartProducts = useSelector((state: RootState) => state.cartProducts);
  const checkIfInCart = (product: Product): boolean => {
    return cartProducts.findIndex((p: Product) => p.id === product.id) !== -1;
  };

  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cartProducts]);

  return (
    <button
      className={`btn ${
        inCart ? "table__button-in-cart" : "table__button-add"
      }`}
      onClick={() => add(product)}
      data-testid="add-to-cart-button"
    >
      {inCart ? "Product in Cart" : "Add to Cart"}
    </button>
  );
}
