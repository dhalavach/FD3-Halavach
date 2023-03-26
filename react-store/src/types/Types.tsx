export type Product = {
  id: number;
  className: string;
  itemType: string;
  itemName: string;
  itemPrice: number;
  itemImage: string | undefined;
  itemImageURL: string | undefined;
  itemImageAlt: string | undefined;
  itemQuantity: number;
  itemDescription: string | undefined;
};
