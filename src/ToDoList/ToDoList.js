import React from 'react';
import './ToDoList.css';
import ToDoItem from './ToDoItem';
import NewToDoItem from './NewToDoItem';

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };

    this.addItem = this.addItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  componentDidMount() {
    const {
      list: { items }
    } = this.props;

    this.setState({ items: items });
  }

  addItem(newItemText) {
    const { items } = this.state;
    items.push({
      itemText: newItemText,
      checked: false
    });
    console.log(items);

    this.setState({ items: items });
  }

  checkItem(index) {
    const { items } = this.state;

    const oldStatus = items[index].checked;

    items[index].checked = !oldStatus;

    this.setState({ items: items });
  }

  render() {
    const { items } = this.state;
    const {
      list: { title }
    } = this.props;

    return (
      <div className="list-container" data-testid="list-container">
        <h4 className="list-title" data-testid="list-title">
          {title}
        </h4>
        <ul className="list-list" data-testid="list-list">
          {items &&
            items.map((item, index) => (
              <ToDoItem
                key={item.itemText}
                item={item}
                onCheck={this.checkItem}
                index={index}
              />
            ))}
        </ul>
        <NewToDoItem onAdd={this.addItem} />
      </div>
    );
  }
}

export default ToDoList;
