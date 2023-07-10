import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <form className="subsrcibe">
      <h1>Save time, save money</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="email-input">
        <input placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}

export default Subscribe;
