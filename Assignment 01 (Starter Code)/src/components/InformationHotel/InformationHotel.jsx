import React from "react";
import "./InformationHotel.css";
import detailData from "../../data/detail.json";

function InformationHotel() {
  return (
    <div className="detail">
      <section className="detail-header">
        <ul>
          <li className="detail-title">{detailData.name}</li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            {detailData.address}
          </li>
          <li>{detailData.distance}</li>
          <li>{detailData.price}</li>
        </ul>
        <div>
          <button>Reserve or Book Now!</button>
        </div>
      </section>
      <section className="list-img">
        {detailData.photos.map((item, index) => (
          <img src={item} key={index} alt="img" />
        ))}
      </section>
      <section className="detail-footer">
        <div className="detail-footer-left">
          <p>
            <strong>{detailData.title}</strong>
          </p>
          <p>{detailData.description}</p>
        </div>
        <div className="detail-footer-right">
          <p>Perfect for a 9-night stay</p>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8
          </p>
          <span className="price-nine">
            ${`${detailData.nine_night_price}`}
          </span>
          <span> (9 nights)</span>
          <button>Reverse or Book now</button>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default InformationHotel;
