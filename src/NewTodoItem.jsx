import React from "react";

export default function NewTodoItem() {
  return (
    <div className="todoitem newTodoItem">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="What is on your mind ?"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
