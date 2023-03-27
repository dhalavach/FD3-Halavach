import { Product } from '../types/Types';
import { formatMoney } from '../util';

export default function Table(props: any) {
  const { products, add } = props;
  return (
    <div>
      <ul className='products'>
        {products.map((product: Product) => {
          return (
            <li key={product.id}>
              <div className='product'>
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
                <button className='btn primary' onClick={() => add(product)}>Add to Cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
