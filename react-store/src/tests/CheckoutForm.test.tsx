import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckoutForm from '../components/CheckoutForm';

test('Renders the component', () => {
  expect(render(<CheckoutForm />)).toBeTruthy();
});

test('submit button is greyed-out on load', () => {
  const form = render(<CheckoutForm />);

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
});

test('submit button is greyed-out with invalid email', () => {
  const form = render(<CheckoutForm />);

  userEvent.type(form.getByTestId('checkout__email'), 'a');

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
});

test('submit button is not greyed-out with valid input', async () => {
  const form = render(<CheckoutForm />);
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
  const form = render(<CheckoutForm />);
  const email = form.getByTestId('checkout__email');
  const name = form.getByTestId('checkout__name');
  const address = form.getByTestId('checkout__address');

  await userEvent.type(email, 'asdf');
  await userEvent.type(name, 'J');
  await userEvent.type(address, '3');

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
});

test('submit button renders with correct text', () => {
  const form = render(<CheckoutForm />);
  const submitButton = form.getByTestId('checkout__submit-button');
  expect(submitButton.textContent).toBe('Proceed to checkout');
});
