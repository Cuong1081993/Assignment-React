import "./SearchList.css";
import searchData from "../../data/search.json";

import React from "react";

const SearchList = () => {
  return (
    <div className="search">
      {searchData.map((item, index) => (
        <div key={index} className="search-items">
          <img src={item.image_url} alt="hotel" />
          <div className="search-content">
            <section className="title">
              <h2>{item.name}</h2>
              <p>{item.rate_text}</p>
              <span>{item.rate}</span>
            </section>
            <section className="distance">
              <p>{item.distance} from center</p>
              <div>
                <span className="rate-tag">{item.tag}</span>
              </div>
              <p>
                <strong>{item.description}</strong>
              </p>
            </section>
            <section className="title-1">
              <p>{item.type}</p>
              <p className="price">${item.price}</p>
            </section>
            <section>
              <p>
                {item.free_cancel === true ? (
                  <div>
                    <section className="title-2">
                      <p>Free cancellation</p>
                      <span>Inclues taxes and fees</span>
                    </section>
                    <section className="title-3">
                      <p>
                        You can cancel later, so lock in this great price today
                      </p>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </section>
            <button className="btn-see">See availability</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
