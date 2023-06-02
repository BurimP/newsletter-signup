import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("email@company.com");

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
      return;
    }
    if (isValidEmail(email)) {
      console.log("valid email");
    }
  };

  return (
    <div>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
