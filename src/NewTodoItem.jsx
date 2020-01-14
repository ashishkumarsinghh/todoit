import React from "react";

export default function NewTodoItem(props) {
  return (
    <div className="todoitem newTodoItem">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What is on your mind ?"
          id="newTodoText"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={props.handler}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
