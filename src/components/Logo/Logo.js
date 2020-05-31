import Aroma from "../../assets/img/logo.png";
import React from 'react';
import "./Logo.css";

const Logo = (props) => {
  console.log(props);
  return (
    <div onClick={props.click}>
      <img src={Aroma} alt="logo" className="LogoLogo" />
    </div>
  )
}

export default Logo
