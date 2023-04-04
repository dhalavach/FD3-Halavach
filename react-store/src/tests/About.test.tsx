import '@testing-library/jest-dom';
import About from '../components/About';
import renderer from 'react-test-renderer';

test('component renders without throwing an error', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toBeTruthy();
});

test('component matches the snapshot', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
