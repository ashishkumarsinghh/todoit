import React from "react";

export default function TodoItem(props) {
  return (
    <React.Fragment>
      <div className="todoitem">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label class="custom-control-label" for="customCheck1">
            {props.item}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
