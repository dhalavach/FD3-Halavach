import { Product } from '../types/Types';

export interface AddToCartButtonProps {
  addToCart: (product: Product) => void;
  product: Product;
}
