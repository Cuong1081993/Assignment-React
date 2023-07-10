import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import dataNavBar from '../../data/navBar.json';



function NavBar() {
  return (
    
    <div className="navbar-content">
      <div className="head-content">
        <h2 className="website-title">Booking Website</h2>
        <div className="button-auth">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      <div className="items">
        <ul>
          {dataNavBar.map((item, index) => {
              return (
                <li key={index} className={item.active ? 'active' : ''}>
                  <i className={`fa ${item.icon}`} />
                  {item.type}
                </li>
              );
            })}
        </ul>
      </div>
	  <Header/>
    </div>
	
  );
}

export default NavBar;
