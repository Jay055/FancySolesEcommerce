import React, { Component } from "react";

import Luggage from "./../../assets/img/luggage.jpg";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="ContainerHome">
        <img src={Luggage} alt="home" className="ImgHome" />
        <div className="OverlayHome">
        <div className="HeadingHome">
          <h1 className="TitleHome">
            Fancy Soles
          </h1>
          <NavLink to ="/shop">
            <button className="BtnHome">shop now</button>
          </NavLink>
        </div>
      </div>
      </div>
    );
  }
}



//  HOme done 