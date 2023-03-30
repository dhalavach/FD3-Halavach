import App from '../App';
import { render, screen } from '@testing-library/react';

test('Renders main page', () => {
  expect(render(<App />)).toBeTruthy();
});
