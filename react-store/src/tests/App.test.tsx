import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders main page', () => {
  expect(render(<App />)).toBeTruthy();
});

test('renders link to cart', () => {
  render(<App />);
  const cart = screen.getByText(/cart/i);
  expect(cart).toBeInTheDocument();
});
