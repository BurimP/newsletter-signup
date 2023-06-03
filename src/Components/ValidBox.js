import React from "react";

const ValidBox = (props) => {
  return (
    <div className="valid-overlay">
      <div className="valid">
        <h1 className="valid-h1">Thanks for subscribing!</h1>
        <p className="valid-p">
          A confirmation email has been sent to{" "}
          <strong>{props.userInput}</strong>. please open it and click the
          button inside to confirm your subscription.
        </p>
        <button className="valid-btn" onClick={props.onClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ValidBox;
