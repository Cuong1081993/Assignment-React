import React from "react";
import './Header.css';
function Header() {

  const handleSearch = () => {
    window.location.replace("/search");
  };
  return (
    <div className="header-content">
      <div className="content">
        <h1>A Lifetime of discount? It's Genius</h1>
        <p>
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
      </div>
      <button className="button-header">Sign in / Register</button>

      <div className="search-form">
        <input type="search" className="search-input" />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;
