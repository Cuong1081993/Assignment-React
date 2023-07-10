import "./Hotel.css";
import dataHotel from "../../data/hotel_list.json";

import React from "react";

function Hotel() {
  return (
    <>
      <h3 style={{ margin: "25px 0" }}>Home guests love</h3>
      <div className="hotel">
        {dataHotel.map((item, index) => {
          return (
            <div key={index} className="items-hotel">
              <img src={item.image_url} alt="hotel" />
              <div className="hotel-content">
                <p className="hotel-text">{item.name}</p>
                <p className="hotel-city">{item.city}</p>
                <p className="hotel-price">Starting from ${item.price}</p>
                <p>
                  <span>{item.rate}</span> {item.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Hotel;
