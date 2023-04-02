export default function AddToCartButton(props: any) {
  const { add, checkIfInCart, product } = props;

  return (
    <button
      className={`btn ${
        checkIfInCart(product) ? 'table__button-in-cart' : 'table__button-add'
      }`}
      onClick={() => add(product)}
    >
      {checkIfInCart(product) ? 'Product in Cart' : 'Add to Cart'}
    </button>
  );
}
