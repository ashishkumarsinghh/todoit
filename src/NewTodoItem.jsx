import React, { useState } from "react";

export default function NewTodoItem(props) {
  const [state, setstate] = useState("");
  const handler = e => {
    e.preventDefault();
    if (state.length > 0) props.handler(state);
    setstate("");
  };
  return (
    <form className="todoitem newTodoItem" id="todoform">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What is on your mind ?"
          id="newTodoText"
          onChange={e => {
            setstate(e.target.value);
          }}
          value={state}
        />
        <div className="input-group-append">
          <button
            className="btn btn-dark"
            type="button"
            id="button-addon2"
            onClick={handler}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
