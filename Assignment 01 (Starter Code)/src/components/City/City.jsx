import React from "react";
import "./City.css";
function City() {
  const cities = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  return (
    <div className="city-items">
      {cities.map((item, index) => {
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
