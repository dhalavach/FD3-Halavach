import store from "./../components/Store";

export type Product = {
  id: number;
  className: string;
  itemType: string;
  itemName: string;
  itemPrice: number;
  itemImage: string;
  itemImageURL: string;
  itemImageAlt: string;
  itemQuantity: number;
  itemDescription: string;
  count: number;
};

export type orderObject = {
  id: number;
  name: string;
  email: string;
  address: string;
  orderedProducts: Product[];
};

export type Order = {};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
