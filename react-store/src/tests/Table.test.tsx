import Table from '../components/Table';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './mocks/mockData.json';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../components/Store';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('renders table with props', () => {
  expect(
    render(
      <Provider store={store}>
        <Router>
          <Table products={data.products} />
        </Router>
      </Provider>
    )
  ).toBeTruthy();
});

test('renders table without props', () => {
  expect(
    render(
      <Provider store={store}>
        <Router>
          <Table />
        </Router>
      </Provider>
    )
  ).toBeTruthy();
});

test('add to cart button renders ', () => {
  render(
    <Provider store={store}>
      <Router>
        <Table products={data.products} />
      </Router>
    </Provider>
  );
  const addButton = screen.getAllByText(/add to cart/i)[0];
  expect(addButton).toBeInTheDocument();
});

test('one add to cart button renders for each product', () => {
  render(
    <Provider store={store}>
      <Router>
        <Table products={data.products} />
      </Router>
    </Provider>
  );
  const addButtons = screen.getAllByText(/add to cart/i);
  expect(addButtons.length).toBe(data.products.length);
});

test('modal window opens when user clicks on a product', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Table products={data.products} />
      </Router>
    </Provider>
  );
  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  expect(modal).toBeVisible();
});

test('modal window closes when user clicks on a close button', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Table products={data.products} />
      </Router>
    </Provider>
  );
  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  const closeModalButton = screen.getByTestId('table__modal-close');
  await userEvent.click(closeModalButton);
  expect(modal).not.toBeVisible;
});
