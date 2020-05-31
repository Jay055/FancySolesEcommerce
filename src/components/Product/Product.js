import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { ProductConsumer } from "./../../context";
import PropTypes from "prop-types";
import "./Product.css";

export default class Product extends Component {
  // props from ProductList 
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
     
    //  Use Product Consumer to share Global Data from context store using the parameter value as reference  
      <ProductConsumer>
        {value=>(
        
        <div className="CardProduct">
        <NavLink to="/details">
          <div
            className="ImgContainerProduct"
            onClick={() => value.handleDetail(id)}
          >
            <img src={img} alt={title} className="ImgProduct"/>
          </div>
    
          <h4 className="TitleProduct">{title}</h4>
        </NavLink>
        <span className="PriceProduct">€{price}</span>

                     {/* Button on the card for the logic between showing "Add to cart" and "in Cart" using disabled property  */}
        <button
          disabled={inCart ? true : false}
          onClick={() => {
            value.addToCart(id);
            value.openModal(id);
          }}

          className={inCart ?"CartBtnDisableProduct" :"CartBtnProduct"}
        >
          {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
        </button>
      </div>
        )}
        </ProductConsumer>
       
    );
  }
}




// Define PropTypes to Prevent errors from mismatch
Product.propTypes ={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}