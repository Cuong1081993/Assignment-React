import React from "react";
import "./City.css";
import dataCity from '../../data/city.json'
function City() {
 
  return (
    <div className="city-items">
      {dataCity.map((item, index) => {
        return (
          <div key={index} className="city-item">
            <div
              className="city-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
            <div className="city-item-content">
            <h3 className="city-name">{item.name}</h3>
              <h4 className="city-subtext">{item.subText}</h4>
            </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default City;
