import React, { useState } from "react";
import InvalidBox from "./InvalidBox";
import ValidBox from "./ValidBox";

const Form = () => {
  const [email, setEmail] = useState("email@company.com");
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputClear = () => {
    setEmail("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setInvalid(true);
      return;
    }
    if (isValidEmail(email)) {
      setValid(true);
    }
  };

  const handleInvalidBox = () => {
    setInvalid(false);
    setValid(false);
  };

  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Email address</label>
        <input
          className="input"
          type="email"
          value={email}
          onClick={handleInputClear}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Subscribe to monthly newsletter
        </button>
      </form>
      {invalid && <InvalidBox onClick={handleInvalidBox} />}
      {valid && <ValidBox onClick={handleInvalidBox} userInput={email} />}
    </div>
  );
};

export default Form;
