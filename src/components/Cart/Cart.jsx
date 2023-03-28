import React from "react";
import Product from "../Product/Product";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart; option 1
  // const {cart} = props; option 2
  
  console.log(cart)

  let total = 0;
  let totalshipping = 0;  
  
  for (const product of cart){
    total= total + product.price;
    totalshipping= totalshipping + product.shipping;        
  }

  const tax= total * 7 /100;
  const grandTotal= total + totalshipping + tax;
//   const {price, tax, shipping}= props;
//   const totalPrice = totalPrice + price;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {totalshipping}</p>
      <p>Tax: {tax}</p>
      <p>Grand Total: {grandTotal}</p>

    </div>
  );
};

export default Cart;
