import '@testing-library/jest-dom';
import Filter from '../components/Filter';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

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

test('component changes after user input', () => {
  const filter = render(
    <Provider store={store}>
      <Router>
        <Filter />
      </Router>
    </Provider>
  );
  const filterInput = screen.getByTestId('filter-input');
  fireEvent.change(filterInput, { target: { value: 'CPU' } });
  const selectedOption = screen.getByText('CPU');
  expect(selectedOption).toBeVisible();
});
