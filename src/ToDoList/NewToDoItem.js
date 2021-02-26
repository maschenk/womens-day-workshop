import React from 'react';

class NewToDoItem extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };

    this.handleAdd = this.handleAdd.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    const { text: newItemText } = this.state;
    const { onAdd } = this.props;

    onAdd(newItemText);

    this.setState({ text: '' });
  }

  updateText(event) {
    event.preventDefault();
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div data-testid="new-to-do-item">
        <input
          type="text"
          onInput={this.updateText}
          value={this.state.text}
          data-testid="item-input"
        />

        <button type="button" onClick={this.handleAdd} data-testid="add-button">
          Add To Do
        </button>
      </div>
    );
  }
}

export default NewToDoItem;
