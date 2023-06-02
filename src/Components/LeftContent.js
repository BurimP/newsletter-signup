import React from "react";
import Form from "./Form";

const LeftContent = () => {
  return (
    <div className="left-content">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <Form />
    </div>
  );
};

export default LeftContent;
