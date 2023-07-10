import React from "react";
import './Type.css';
import dataType from '../../data/type.json';

function Type() {
  
  return (
    <>
      <h3 style={{margin: '25px 0'}}>Browse by property type</h3>
      <div className="category-items">
        {dataType.map((item, index) => {
          return (
            <div key={index} className="category-item">
              <div className="category-image">
                <img src={item.image} alt="image" />
              </div>
              <h4 className="category-name">{item.name}</h4>
              <h6 className="category-count">{item.count} hotels</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Type;
