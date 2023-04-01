import Table from '../components/Table';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './mocks/mockData.json';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <Table products={data.products} />
      </Router>
    )
  ).toBeTruthy();
});

test('renders table without props', () => {
  expect(
    render(
      <Router>
        <Table />
      </Router>
    )
  ).toBeTruthy();
});

test('add to cart button renders ', () => {
  render(
    <Router>
      <Table products={data.products} />
    </Router>
  );
  const addButton = screen.getAllByText(/add to cart/i)[0];
  expect(addButton).toBeInTheDocument();
});

test('one add to cart button renders for each product', () => {
  render(
    <Router>
      <Table products={data.products} />
    </Router>
  );
  const addButtons = screen.getAllByText(/add to cart/i);
  expect(addButtons.length).toBe(data.products.length);
});

test('modal window opens when user clicks on a product', async () => {
  render(
    <Router>
      <Table products={data.products} />
    </Router>
  );
  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  expect(modal).toBeVisible();
});

test('modal window closes when user clicks on a close button', async () => {
  render(
    <Router>
      <Table products={data.products} />
    </Router>
  );
  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  const closeModalButton = screen.getByTestId('table__modal-close');
  await userEvent.click(closeModalButton);
  expect(modal).not.toBeVisible;
});
