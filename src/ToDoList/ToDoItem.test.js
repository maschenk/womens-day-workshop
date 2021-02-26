import { render, fireEvent } from '@testing-library/react';
import ToDoItem from './ToDoItem';

const onCheckMock = jest.fn();
const itemMock = { itemText: 'test item', checked: false };

test('should be checkable', async () => {
  const component = render(
    <ToDoItem item={itemMock} onCheck={onCheckMock} index={0} />
  );
  const checkBox = component.getByTestId('item-checkbox');

  await fireEvent.click(checkBox);

  expect(onCheckMock).toHaveBeenCalled();
});
