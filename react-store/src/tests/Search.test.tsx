import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Search from '../components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../components/Store';
import { Provider } from 'react-redux';

test('Renders the component', () => {
  expect(
    render(
      <Provider store={store}>
        <Router>
          <Search />
        </Router>
      </Provider>
    )
  ).toBeTruthy();
});

test('search input field changes when input is entered', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Search />
      </Router>
    </Provider>
  );
  const searchInput = screen.getByTestId('search__input-field');
  fireEvent.change(searchInput, { target: { value: 'qwerty' } });
  const searchInputValue = screen.getByTestId(
    'search__input-field'
  ) as HTMLInputElement;
  expect(searchInputValue.value).toBe('qwerty');
});
