import "./Footer.css";
import React from "react";
import dataFooter from "../../data/footer.json";

function Footer() {
  return (
    <div className="footer">
      {dataFooter.map((item, index) => {
        <div key={index}>
          <ul className="list-footer">
            {item.col_values.map((item, index) => {
              <li key={index} className="item-footer">
                {item}
              </li>;
            })}
          </ul>
        </div>;
      })}
    </div>
  );
}

export default Footer;
