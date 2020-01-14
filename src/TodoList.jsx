import React from "react";
import TodoItem from "./TodoItem";
import NewTodoItem from "./NewTodoItem";

export default function TodoList(props) {
  const listItems = props.items.map(obj => (
    <TodoItem key={obj.id} item={obj.text} id={obj.id} />
  ));
  return (
    <div className="row justify-content-center ">
      <div className="col-sm-5 todolist">
        <NewTodoItem handler={props.addTodoHandler} />
        {listItems}
      </div>
    </div>
  );
}
