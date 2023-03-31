import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from '../mockData.json';

test('Renders main page', () => {
  expect(render(<App />)).toBeTruthy();
});


