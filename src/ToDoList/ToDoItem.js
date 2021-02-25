import React from 'react';

const ToDoItem = ({ item: { itemText, checked }, onCheck, index }) => {
  const handleCheck = () => {
    onCheck(index);
  };

  return (
    <li data-testid="to-do-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        data-testid="item-checkbox"
      />{' '}
      {itemText}
    </li>
  );
};

export default ToDoItem;
