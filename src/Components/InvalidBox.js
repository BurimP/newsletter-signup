import React from "react";

const InvalidBox = (props) => {
  return (
    <div className="overlay">
      <div className="invalid">
        <h1 className="invalid-h1">Invalid Email Format!</h1>
        <button className="invalid-btn" onClick={props.onClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default InvalidBox;
