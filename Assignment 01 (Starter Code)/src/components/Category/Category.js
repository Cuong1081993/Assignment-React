import React from "react";
import './Category.css';
function Category() {
  const categories = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <>
      <h3 style={{margin: '25px 0'}}>Browse by property type</h3>
      <div className="category-items">
        {categories.map((item, index) => {
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

export default Category;
