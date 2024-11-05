import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../components/Store';
import renderer from 'react-test-renderer';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('renders main page', () => {
  const application = render(
    <Provider store={store}>
      <StaticRouter location={''}>
        <App />
      </StaticRouter>
    </Provider>
  );
  expect(application).toBeTruthy();
  application.unmount();
});

test('renders link to cart', () => {
  const application = render(
    <Provider store={store}>
      <StaticRouter location={''}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const cart = screen.getByText(/cart/i);
  expect(cart).toBeInTheDocument();
  application.unmount();
});

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <StaticRouter location={''}>
          <App />
        </StaticRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
