import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import CheckoutForm from '../components/CheckoutForm';
import { StaticRouter as Router } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../components/Store';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Renders the component', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  expect(form).toBeTruthy();
});

test('submit button is greyed-out on load', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
  form.unmount();
});

test('submit button is greyed-out with invalid email', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );

  userEvent.type(form.getByTestId('checkout__email'), 'a');

  expect(
    form.getByTestId('checkout__submit-button').classList.contains('grey-out')
  ).toBe(true);
  form.unmount();
});

test('submit button is not greyed-out with valid input', async () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
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
  form.unmount();
});

test('submit button is greyed-out with invalid input', async () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  const email = form.getByTestId('checkout__email');
  const name = form.getByTestId('checkout__name');
  const address = form.getByTestId('checkout__address');
  const submitButton = form.getByTestId('checkout__submit-button');
  await userEvent.type(email, 'asdf');
  await userEvent.type(name, 'J');
  await userEvent.type(address, '3');
  expect(submitButton).toHaveClass('grey-out');
  form.unmount();
});

test('submit button renders with correct text', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  const submitButton = form.getByTestId('checkout__submit-button');
  expect(submitButton.textContent).toBe('Proceed to checkout');
  form.unmount();
});

test('error message is displayed when invalid email is entered', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  const emailInput = screen.getByTestId('checkout__email');
  fireEvent.change(emailInput, { target: { value: 'qwerty' } });
  const errorMessage = screen.getByTestId('checkout__email-error-message');
  expect(errorMessage).toBeVisible();
  form.unmount();
});

test('error message is displayed when invalid name is entered', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  const nameInput = screen.getByTestId('checkout__name');
  fireEvent.change(nameInput, { target: { value: 'k' } });
  const errorMessage = screen.getByTestId('checkout__name-error-message');
  expect(errorMessage).toBeVisible();
  form.unmount();
});

test('error message is displayed when invalid address is entered', () => {
  const form = render(
    <Provider store={store}>
      <Router location={''}>
        <CheckoutForm setCheckoutFormOpen={() => {}} />
      </Router>
    </Provider>
  );
  const addressInput = screen.getByTestId('checkout__address');
  fireEvent.change(addressInput, { target: { value: 1 } });
  const errorMessage = screen.getByTestId('checkout__address-error-message');
  expect(errorMessage).toBeVisible();
  form.unmount();
});

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router location={''}>
          <CheckoutForm setCheckoutFormOpen={() => {}} />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
