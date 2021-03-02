import React from "react";
import "./ToDoList.css";
import { ReactComponent as Logo } from "../babbelLogo.svg";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="list-container" data-testid="list-container">
        <Logo />
        <h4 className="list-title" data-testid="list-title">
          {this.props.list.title}
        </h4>
        Here comes the task list
      </div>
    );
  }
}

export default ToDoList;
