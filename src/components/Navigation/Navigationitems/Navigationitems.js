import Cart from "../../../assets/img/shopping-cart.svg";
import Navigationitem from "./Navigationitem/Navigationitem";
import React from "react";
import "./Navigationitems.css";

const navigationItems = () => {
  return (
    <ul className="NavigationItems">
      
      <Navigationitem link="/shop" >
        Shop
      </Navigationitem>
    
      <Navigationitem link="/cart" cart="cart">
        <img src={Cart} alt="cart" className="CartItems"/>
      </Navigationitem>
    </ul>
  );
};

export default navigationItems;
