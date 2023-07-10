import "./Footer.css";
import React from "react";
import dataFooter from "../../data/footer.json";

function Footer() {
  console.log("dataFooter", dataFooter);
  return (
    <div className="footer">
      {dataFooter.map((item, index) => {
        return (
          <>
            <div key={index}>
              <ul className="list-footer">
                {item.col_values.map((item, index1) => {
                  return (
                    <>
                      <li key={index1} className="item-footer">
                        {item}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Footer;
