import React from 'react';
import classes from "./Title.css";
import "./Title.css"

// Props from product list 
const Title = (props) => {

  return (
      <h1 className="Title">{props.name}</h1>
  )
}

export default Title
