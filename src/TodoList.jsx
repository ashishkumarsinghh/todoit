import React from "react";
import TodoItem from "./TodoItem";
import NewTodoItem from "./NewTodoItem";

export default function TodoList() {
  return (
    <div className="row justify-content-center ">
      <div className="col-sm-5 todolist">
        <NewTodoItem />
        <TodoItem item="Hello World !" />
        <TodoItem item="Learn Javascript and ES6." />
        <TodoItem item="Learn MongoDB and GraphQL." />
        <TodoItem item="Learn React, Redux and Hooks." />
        <TodoItem item="Contribute to Open Source." />
      </div>
    </div>
  );
}
