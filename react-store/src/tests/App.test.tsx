import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';


test('renders main page', () => {
  expect(render(<Router> <App /></Router> )).toBeTruthy();
});

test('renders link to cart', () => {
  render(<Router> <App /></Router> );
  const cart = screen.getByText(/cart/i);
  expect(cart).toBeInTheDocument();
});
