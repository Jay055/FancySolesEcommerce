import React from 'react';
import { NavLink } from "react-router-dom";
import Navigationitem from "./../Navigationitems/Navigationitem/Navigationitem";
import Logo from "./../../Logo/Logo";
import  "./SideDrawer.css";
const SideDrawer = (props) => {
  let drawerClasses = ["SideDrawer"];
  if(props.show){
    drawerClasses = ["SideDrawer","OpenSide"]
  }
  return (
    <nav className= {drawerClasses.join(" ")}>
     <div className="LogoSide">
        <NavLink to="/">
          <Logo click={props.click}/>
        </NavLink>
      </div>
      <ul className="NavigationItemsSide">
      <Navigationitem link="/shop" click={props.click} >
        Shop
      </Navigationitem>
      <Navigationitem link="/about" click={props.click}>About</Navigationitem>
      <Navigationitem link="/cart" click={props.click}>
       Cart
      </Navigationitem>
    </ul>
    </nav>
  )
}

export default SideDrawer
