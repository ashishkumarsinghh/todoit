import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.state = {
      todoitems: [],
      count: 0
    };
  }

  handleCompleted(id, completed) {
    this.setState(prevState => {
      let tcpy = [...prevState.todoitems];
      console.log(id);
      tcpy[id].completed = completed;
      return {
        ...prevState,
        todoitems: tcpy
      };
    });
  }
  addTodo(newItem) {
    this.setState(prevState => {
      return {
        ...prevState,
        todoitems: [
          ...prevState.todoitems,
          {
            id: prevState.count++,
            text: newItem,
            completed: false
          }
        ],
        count: prevState.count
      };
    });
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
              handler={this.handleCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}
