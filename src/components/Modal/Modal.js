import React, { Component } from "react";

import BackDrop from "./../Backdrop/Backdrop";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "./../../context";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div>
                <BackDrop click={closeModal} />
                <div className="ContainerModal">
                <div className="ImgContainerModal">
                    <img src={img} alt={title} className="ImgModal"/>
                </div>
                 <h3 >{title}</h3>
                 <h3>Price:€{price}</h3>
                 <div className="BtnContainerModal">
                   <NavLink to="/shop">
                     <button className="BackButtonModal" onClick={closeModal}>Back to Shop</button>
                   </NavLink>
                   <NavLink to="/Cart">
                     <button className="CartBtnModal" onClick={closeModal}>Go to Cart</button>
                   </NavLink>
                 </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
