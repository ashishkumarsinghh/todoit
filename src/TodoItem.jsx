import React from "react";

export default function TodoItem(props) {
  const handleCheckbox = () => {
    props.handler(props.id, !props.completed);
  };
  return (
    <React.Fragment>
      <div className="alert alert-dark" role="alert">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={"cb" + props.id}
            onClick={handleCheckbox}
            value={props.completed}
          />
          <label className="custom-control-label" htmlFor={"cb" + props.id}>
            {props.item}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
