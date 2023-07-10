import "./Footer.css";
import React from "react";
import dataFooter from "../../data/footer.json";

const Footer = () => {
  return (
    <div className="footer">
      {dataFooter.map((item, index) => (
        <div key={index}>
          <ul className="list-footer">
            {item.col_values.map((item, subIndex) => (
              <li key={subIndex} className="item-footer">
                {item}
              </li>
            ))}
          </ul>
        </div>  
      ))}
    </div>
  );
};


export default Footer;
