import { render } from '@testing-library/react';
import ToDoList from './ToDoList';
import list from '../Data/list';

test('should render', () => {
  const { container } = render(<ToDoList list={list} />);
  expect(container).toMatchSnapshot();
});
