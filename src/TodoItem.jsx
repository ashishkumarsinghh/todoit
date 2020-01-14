import React from "react";

export default function TodoItem(props) {
  return (
    <React.Fragment>
      <div className="todoitem">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={"cb" + props.id}
          />
          <label className="custom-control-label" htmlFor={"cb" + props.id}>
            {props.item}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
