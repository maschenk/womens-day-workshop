import React from 'react';
import './NewToDoItem.css';

class NewToDoItem extends React.Component {
  state = { text: '' };

  handleAdd = (event) => {
    event.preventDefault();

    if (this.state.text !== '') {
      // implement a handler here :)
    }

    this.setState({ text: '' });
  };

  updateText = (event) => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div data-testid="new-to-do-item">
        <input
          type="text"
          onInput={this.updateText}
          value={this.state.text}
          data-testid="item-input"
        />

        {/* This seems like a nice spot for a button */}
      </div>
    );
  }
}

export default NewToDoItem;
