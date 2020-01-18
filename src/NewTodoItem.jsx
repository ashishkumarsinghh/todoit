import React, { useState } from "react";

export default function NewTodoItem(props) {
  const [state, setstate] = useState("");
  const handler = e => {
    e.preventDefault();
    if (state.length > 0) {
      props.handler(state);
      setstate("");
    }
  };
  const handleKeyPress = e => {
    if (e.charCode === 13) {
      if (state.length > 0) {
        props.handler(state);
        setstate("");
      }
    }
  };
  const submitHandler = form => {
    form.preventDefault();
  };
  return (
    <form
      className="todoitem newTodoItem"
      id="todoform"
      onSubmit={submitHandler}
    >
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
          onKeyPress={handleKeyPress}
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
