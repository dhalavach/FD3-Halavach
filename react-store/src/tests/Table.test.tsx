import Table from '../components/Table';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './mocks/mockData.json';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../components/Store';

const testStore = {
  ...store,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
};

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});



test('renders table', () => {
  expect(
    render(
      <Provider store={testStore}>
        <Router>
          <Table />
        </Router>
      </Provider>
    )
  ).toBeTruthy();
});

// test('renders table without props', () => {
//   expect(
//     render(
//       <Provider store={store}>
//         <Router>
//           <Table />
//         </Router>
//       </Provider>
//     )
//   ).toBeTruthy();
// });

test('add to cart button renders ', async () => {
  render(
    <Provider store={testStore}>
      <Router>
        <Table />
      </Router>
    </Provider>
  );
  await waitFor(
    () => expect(screen.getAllByText(/add to cart/i)).toBeInTheDocument
  );
  const addButton = screen.getAllByText(/add to cart/i)[0];
  expect(addButton).toBeInTheDocument();
});

test('one add to cart button renders for each product on a default page size of 10 products', async () => {
  render(
    <Provider store={testStore}>
      <Router>
        <Table />
      </Router>
    </Provider>
  );
  await waitFor(
    () => expect(screen.getAllByText(/add to cart/i)).toBeInTheDocument
  );
  const addButtons = screen.getAllByText(/add to cart/i);
  expect(addButtons.length).toBe(10);
});

test('modal window opens when user clicks on a product', async () => {
  render(
    <Provider store={testStore}>
      <Router>
        <Table />
      </Router>
    </Provider>
  );
  await waitFor(
    () => expect(screen.getAllByTestId('table__product')).toBeInTheDocument
  );
  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  expect(modal).toBeVisible();
});

test('modal window closes when user clicks on a close button', async () => {
  render(
    <Provider store={testStore}>
      <Router>
        <Table />
      </Router>
    </Provider>
  );
  await waitFor(
    () => expect(screen.getAllByTestId('table__product')).toBeInTheDocument
  );

  const product = screen.getAllByTestId('table__product')[0];
  await userEvent.click(product);
  const modal = screen.getByTestId('table__modal');
  const closeModalButton = screen.getByTestId('table__modal-close');
  await userEvent.click(closeModalButton);
  expect(modal).not.toBeVisible;
});
