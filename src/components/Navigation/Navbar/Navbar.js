import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Logo from "../../Logo/Logo";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <header className="Navbar">
    <div className="Navigation">
      <div className="ToggleButton">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="LogoNav">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
        <NavigationItems />
    </div>
  </header>
);
export default Navbar;
