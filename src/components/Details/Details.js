import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { ProductConsumer } from "./../../context";
import "./Details.css";

// Details Page 
// Import ProductConsumer to acccess value from the context store 
// Destructure our values from the Product consumer 

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            company,
            img,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className="Container">
              <div className="ImgContainer">
                <img src={img} alt={title} className="Img" />
              </div>
              <div className="InfoContainer">
                <h1 className="Title">{title}</h1>
                <h3>Product: {company}</h3>
                <p>
                  <strong>Product Description: </strong>
                  {info}
                </p>
                <h2>Price: € {price}</h2>
                <div className="BtnContainer">
                  <NavLink to="/shop">
                    <button className="BackButton">Back to Shop</button>
                  </NavLink>
                  <button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className={
                      inCart ?"CartBtnDisable" :"CartBtn"
                    }
                  >
                    {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
