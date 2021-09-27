import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe container">
      <div className="subscribe_content">
        <h1>Subscribe to out Newsletter</h1>
        <div className="subscribe_email_center">
          <label htmlFor="subscribe_email" />
          <input
            className="subscribe_input"
            type="email"
            placeholder="Your email"
            name="subscribe_email"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
