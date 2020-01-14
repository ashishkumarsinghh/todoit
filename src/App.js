import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todoitems: [],
      count: 0
    };
  }

  addTodo(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        todoitems: [
          ...prevState.todoitems,
          {
            id: prevState.count + 1,
            text: document.getElementById("newTodoText").value
          }
        ],
        count: prevState.count + 1
      };
    });
    //document.getElementById("newTodoText").value = "";
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm centered">
            <Header />
            <TodoList
              items={this.state.todoitems}
              addTodoHandler={this.addTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}
