import React from "react";

export default class Todo extends React.Component {

  // handleToggle = () => {
  //   const { todo, togglePurchased } = this.props;
  //   togglePurchased(todo.id);
  //   this.setState(prevState => ({
  //     completed: !prevState.completed
  //   }));
  // };

  render() {
    
    return (
      <div onClick={this.props.onClickTodo(this.props.todo.id)}>
        <span>
          {this.props.todo.name}
          {this.props.todo.completed ? " ✔️" : ""}
        </span>
      </div>
    );
  }
}
