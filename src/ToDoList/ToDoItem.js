import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ item, onCheck, index }) => {
  const todoClass = item.checked ? 'done' : 'undone';

  return (
    <li className={todoClass} data-testid="to-do-item">
      <input
        type="checkbox"
        checked={item.checked}
        // this input field needs a real handler
        onChange={() => {}}
        data-testid="item-checkbox"
      />
      {item.itemText}
    </li>
  );
};

export default ToDoItem;
