import React, { Component } from "react";

import Product from "../Product/Product";
import { ProductConsumer } from "./../../context";
import Title from "./../Title/Title";
import "./ProductList.css";

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    // console.log(this.state.products);
    return (
      <div className="PageContainer">
        <Title name="Shoes" />
        <div className ="ProductContainer">
          {/* Get our values from the context, return product key and product   */}
          <ProductConsumer>
            {(value)=>{
                return value.products.map(product=>(<Product key={product.id} product={product}/>))
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
