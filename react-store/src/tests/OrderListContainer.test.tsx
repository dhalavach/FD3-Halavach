import '@testing-library/jest-dom';
import OrderListContainer from '../components/OrderListContainer';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../components/Store';
import { BrowserRouter as Router } from 'react-router-dom';

const mockOrder = {
  id: 1,
  name: 'John Doe',
  email: 'foo@gmail.com',
  address: 'Some Street 7, 1414',
  orderedProducts: [
    {
      id: 2,
      className: 'Item',
      itemType: 'motherboard',
      itemName: 'ASUS PRIME Z790-P D4',
      itemPrice: 820,
      itemImage: '/assets/images/asusz790.jpg',
      itemImageURL: 'https://uni.by/files/ItemsImages/135354_r300.jpg',
      itemImageAlt: 'Asus Z790 Prime',
      itemQuantity: 1,
      itemDescription: 'Lorem ipsum...',
      count: 1,
    },
    {
      id: 14,
      className: 'Item',
      itemType: 'CPU',
      itemName: 'Intel 13700k',
      itemPrice: 699,
      itemImage: '/assets/images/13700k.jpg',
      itemImageURL: 'asdf',
      itemImageAlt: '13700k',
      itemQuantity: 7,
      itemDescription:
        's-1700| 16C/24T (8P 3.4/5.4GHz + 8E 2.5/4.2GHz) 30MB 253W Intel UHD 770',
      count: 1,
    },
  ],
};

test('component renders without throwing an error', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <OrderListContainer order={mockOrder} />{' '}
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <OrderListContainer order={mockOrder} />{' '}
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
