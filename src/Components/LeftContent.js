import React from "react";
import Form from "./Form";
import img4 from "../assets/images/icon-list.svg";

const LeftContent = () => {
  return (
    <div className="left-content">
      <div className="left-wrapper">
        <h1 className="title">Stay updated!</h1>
        <p className="paragraph">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="u-list">
          <li className="item">
            <img alt="" src={img4} className="item-img" />
            Product discovery and building what matters
          </li>
          <li className="item">
            <img alt="" src={img4} className="item-img" />
            Measuring to ensure updates are a success
          </li>
          <li className="item">
            <img alt="" src={img4} className="item-img" />
            And much more!
          </li>
        </ul>
        <Form />
      </div>
    </div>
  );
};

export default LeftContent;
