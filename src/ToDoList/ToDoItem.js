import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ item: { itemText, checked }, onCheck, index }) => {
  const handleCheck = () => {
    onCheck(index);
  };
  const todoClass = checked ? "done" : "undone";

  return (
    <li className={todoClass} data-testid="to-do-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        data-testid="item-checkbox"
      />
      {itemText}
    </li>
  );
};

export default ToDoItem;
