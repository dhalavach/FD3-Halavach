import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import AddToCartButton from '../components/AddToCartButton';
import { Provider } from 'react-redux';
import store from '../components/Store';
import { setCartProducts } from '../slices/cartProductsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Product } from '../types/Types';

afterEach(cleanup);
const mockProduct = {
  id: 1,
  className: 'Item',
  itemType: 'motherboard',
  itemName: 'MSI MPG B650 Edge WiFi',
  itemPrice: 1095,
  itemImage: '/assets/images/msib650.jpg',
  itemImageURL: 'https://uni.by/files/ItemsImages/137010_r300.jpg',
  itemImageAlt: 'MSI B650 Edge',
  itemQuantity: 0,
  itemDescription: '',
  count: 1,
};
const mockCartProducts = [
  {
    id: 1,
    className: 'Item',
    itemType: 'motherboard',
    itemName: 'MSI MPG B650 Edge WiFi',
    itemPrice: 1095,
    itemImage: '/assets/images/msib650.jpg',
    itemImageURL: 'https://uni.by/files/ItemsImages/137010_r300.jpg',
    itemImageAlt: 'MSI B650 Edge',
    itemQuantity: 0,
    itemDescription: '',
    count: 1,
  },
];

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AddToCartButton />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('button renders without throwing errors', () => {
  // render(
  //   <Provider store={store}>
  //     <AddToCartButton product={mockProduct} />
  //   </Provider>
  // );

  // const button = screen.getAllByTestId('add-to-cart-button')[0];
  // expect(button).toBeTruthy();

  let comp = renderer.create(
    <Provider store={store}>
      <AddToCartButton />
    </Provider>
  );
  expect(comp).toBeTruthy();
});
