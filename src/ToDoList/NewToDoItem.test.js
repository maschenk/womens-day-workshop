import { render, fireEvent } from '@testing-library/react';
import NewToDoItem from './NewToDoItem';

const onAddMock = jest.fn();

test('should render', () => {
  const { container } = render(<NewToDoItem onAdd={onAddMock} />);
  expect(container).toMatchSnapshot();
});

test('should add item', () => {
  const component = render(<NewToDoItem onAdd={onAddMock} />);

  const inputField = component.getByTestId('item-input');

  fireEvent.input(inputField, { target: { value: 'add a test item' } });
  expect(inputField.value).toBe('add a test item');

  const addButton = component.getByTestId('add-button');

  fireEvent.click(addButton);
  expect(onAddMock).toHaveBeenCalled();
});
