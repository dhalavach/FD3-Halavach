import "@testing-library/jest-dom";
import OrdersList from "../components/OrdersList";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../components/Store";
import { useState } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

test("component renders without throwing an error", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test("component matches the snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <OrdersList />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("component displays Loading... if orders have not loaded yet", () => {
  // jest.mock('react', ()=>({
  //   ...jest.requireActual('react'),
  //   useState: jest.fn()
  // }))

  render(
    <Provider store={store}>
      <OrdersList />
    </Provider>
  );

  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeVisible();
});
