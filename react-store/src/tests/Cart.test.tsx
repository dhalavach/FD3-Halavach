import '@testing-library/jest-dom';
import Cart from '../components/Cart';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../components/Store';

test('component renders without throwing an error', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
