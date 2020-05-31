import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigationitem.css";

// Get props from NavigationItems 
const navigationItem = props => {
// console.log(props);
  return (
    
    <li className= {props.cart !=="cart" ? "NavigationItem":"CartItem"} onClick={props.click}>
    
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
