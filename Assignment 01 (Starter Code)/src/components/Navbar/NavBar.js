import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";

// import * as data from '../../static/data/navBar.json'
const data = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

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
          {data &&
            data.map((item, index) => {
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
