import React from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem';
import NewToDoItem from './NewToDoItem';
import { ReactComponent as Logo } from '../babbelLogo.svg';

class ToDoList extends React.Component {
  state = { items: this.props.list.items };

  addItem = (newItemText) => {
    const newItem = { itemText: newItemText, checked: false };

    this.setState((state) => {
      return {
        items: [...state.items, newItem]
      };
    });
  };

  checkItem = (index) => {
    const updatedItemList = this.state.items.map((item, i) => {
      if (i === index) {
        item.checked = !item.checked;
      }
      return item;
    });

    // Just printing the list to the console won't cause a re-rendering...
    console.log(updatedItemList);
  };

  render() {
    return (
      <div className="list-container" data-testid="list-container">
        <Logo />
        <h4 className="list-title" data-testid="list-title">
          {this.props.list.title}
        </h4>
        <ul className="list-list" data-testid="list-list">
          {/* This currently only shows 1 item, we want to see all of them! */}
          <ToDoItem
            key={this.state.items[0].itemText}
            item={this.state.items[0]}
            onCheck={this.checkItem}
            index="0"
          />
        </ul>
        <NewToDoItem onAdd={this.addItem} />
      </div>
    );
  }
}

export default ToDoList;
