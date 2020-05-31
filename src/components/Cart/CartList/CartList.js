import React from "react";
import CartItem from "./../CartItem/CartItem";
import CartColumns from "./../CartColumns/CartCoulmns";
import "./CartList.css";
const CartList = ({ value }) => {
  const { cart } = value;
  return (
    
      <div className="TableContainerCartList">
        <table className="CartTableCartList">
          <CartColumns />
          {cart.map(item => {
            return <CartItem key={item.id} item={item} value={value} />;
          })}
        </table>
           
      </div>
    
  );
};

export default CartList;
