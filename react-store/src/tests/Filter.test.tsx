import '@testing-library/jest-dom';
import Filter from '../components/Filter';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import store from '../components/Store';
import Table from '../components/Table';
import useSearchParamsState from '../hooks/useSearchParamsState';

test('component renders without throwing an error', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Filter />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test('component matches the snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Filter />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('component changes after user input', () => {
  render(
    <Provider store={store}>
      <Router>
        <Filter />
      </Router>
    </Provider>
  );
  const filterInput = screen.getByTestId('filter-input');
  fireEvent.change(filterInput, { target: { value: 'CPU' } });
  const selectedOption = screen.getByText('CPU');
  expect(selectedOption).toBeVisible();
});

// test('component changes the URL param after user input', async () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Filter />
//       </Router>
//     </Provider>
//   );
//   const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
//   const filterInput = screen.getByTestId('filter-input');

//   await userEvent.selectOptions(filterInput, 'CPU');

//   expect(filterParam).toBe('CPU');
// });
