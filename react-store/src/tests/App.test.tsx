import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../components/Store";
import renderer from "react-test-renderer";

Object.defineProperty(window, "matchMedia", {
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

test("renders main page", () => {
  expect(
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  ).toBeTruthy();
});

test("renders link to cart", () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const cart = screen.getByText(/cart/i);
  expect(cart).toBeInTheDocument();
});

test("component matches the snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
