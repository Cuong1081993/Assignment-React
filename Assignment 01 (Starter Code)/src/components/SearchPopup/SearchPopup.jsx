import React from "react";
import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <p>Search</p>
      <form>
        <div className="search-header">
          <label>Destination</label>
          <input type="text" />
          <label>Check-in Date</label>
          <input type="date" />
        </div>
        <div className="search-body">
          <p>Option</p>
          <section>
            <label>Min price per night</label>
            <input type="number" />
          </section>
          <section>
            <label>Max price per night</label>
            <input type="number" />
          </section>
          <section>
            <label>Adult</label>
            <input type="number" />
          </section>
          <section>
            <label>Children</label>
            <input type="number" />
          </section>
          <section>
            <label>Room</label>
            <input type="number" />
          </section>
        </div>
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;
