import React from "react";
import "./NewToDoItem.css";

class NewToDoItem extends React.Component {
  state = { text: "" };

  handleAdd = (event) => {
    event.preventDefault();

    this.state.text !== "" && this.props.onAdd(this.state.text);

    this.setState({ text: "" });
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

        <button
          className="add-button"
          type="button"
          onClick={this.handleAdd}
          data-testid="add-button"
        >
          Add To Do
        </button>
      </div>
    );
  }
}

export default NewToDoItem;
