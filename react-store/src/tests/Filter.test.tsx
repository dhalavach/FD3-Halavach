import '@testing-library/jest-dom';
import Filter from '../components/Filter';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../components/Store';

test('component renders without throwing an error', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Filter />
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
          <Filter />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
