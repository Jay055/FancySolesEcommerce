import React from 'react'
import classes from './DrawerToggleButton.css';
const DrawerToggleButton = (props) => {
  return (
   <button className="ToggleButton" onClick={props.click}>
       <div className="ToggleButttonLine"/>
       <div className="ToggleButttonLine"/>
       <div className="ToggleButttonLine"/>
   </button>
  )
}

export default DrawerToggleButton
