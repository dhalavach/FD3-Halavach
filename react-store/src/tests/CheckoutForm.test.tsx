import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import CheckoutForm from '../components/CheckoutForm';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders the component', () => {
  expect(
    render(
      <Router>
        <CheckoutForm />
      </Router>
    )
  ).toBeTruthy();
});

test('submit button is greyed-out on load', () => {
  const form = render(
    <Router>
      <CheckoutForm />
    </Router>
  );

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
});

test('submit button is greyed-out with invalid email', () => {
  const form = render(
    <Router>
      <CheckoutForm />
    </Router>
  );

  userEvent.type(form.getByTestId('checkout__email'), 'a');

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
});

test('submit button is not greyed-out with valid input', async () => {
  const form = render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const email = form.getByTestId('checkout__email');
  const name = form.getByTestId('checkout__name');
  const address = form.getByTestId('checkout__address');

  await userEvent.type(email, 'asdf@mail.com');
  await userEvent.type(name, 'John Doe');
  await userEvent.type(address, 'Some Street 1, SomeCity');

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(false);
});

test('submit button is greyed-out with invalid input', async () => {
  const form = render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const email = form.getByTestId('checkout__email');
  const name = form.getByTestId('checkout__name');
  const address = form.getByTestId('checkout__address');
  const submitButton = form.getByTestId('checkout__submit-button');

  await userEvent.type(email, 'asdf');
  await userEvent.type(name, 'J');
  await userEvent.type(address, '3');

  expect(submitButton).toHaveClass('grey-out');
});

test('submit button renders with correct text', () => {
  const form = render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const submitButton = form.getByTestId('checkout__submit-button');
  expect(submitButton.textContent).toBe('Proceed to checkout');
});

test('error message is displayed when invalid email is entered', () => {
  render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const emailInput = screen.getByTestId('checkout__email');
  fireEvent.change(emailInput, { target: { value: 'qwerty' } });
  const errorMessage = screen.getByTestId('checkout__email-error-message');
  expect(errorMessage).toBeVisible();
});

test('error message is displayed when invalid name is entered', () => {
  render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const nameInput = screen.getByTestId('checkout__name');
  fireEvent.change(nameInput, { target: { value: 'k' } });
  const errorMessage = screen.getByTestId('checkout__name-error-message');
  expect(errorMessage).toBeVisible();
});

test('error message is displayed when invalid address is entered', () => {
  render(
    <Router>
      <CheckoutForm />
    </Router>
  );
  const addressInput = screen.getByTestId('checkout__address');
  fireEvent.change(addressInput, { target: { value: 1 } });
  const errorMessage = screen.getByTestId('checkout__address-error-message');
  expect(errorMessage).toBeVisible();
});
