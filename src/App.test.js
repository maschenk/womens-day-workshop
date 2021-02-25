import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders To Do header title', () => {
  const headerElement = screen.getByTestId('page-title');
  expect(headerElement).toBeInTheDocument();
});

test('renders a list with children', () => {
  const list = screen.getByTestId('list-list');
  expect(list).toBeInTheDocument();
  expect(list).toContainHTML('li');
});

test('contains four to-do items', () => {
  const items = screen.getAllByTestId('to-do-item');
  expect(items).toHaveLength(4);
});

test('renders a new to-do item component with an input field and a button', () => {
  const newItem = screen.getByTestId('new-to-do-item');
  expect(newItem).toBeInTheDocument();
  expect(newItem).toContainHTML('input');
  expect(newItem).toContainHTML('button');
});
