import React from 'react'
import "./Order.css"

const Order = () => {
  return (
    <div className="order-main">
    <div className="order-head">
      <h1>Checkout</h1>
    </div>
    <div className="payment">
      <span className="green-text">Payment Mode:</span>
      <span>Cash on Delivery</span>
    </div>
    <div className="delivery">
      <span className="green-text">Deliver to:</span>
      <span>Nagpur, Maharashtra</span>
    </div>
    <div className="total">
      <span className="green-text">Total:</span>
      <span>120Rs</span>
    </div>
    <div className="button-main">
      <button className="order-button">Place Order</button>
    </div>
  </div>
  )
}

export default Order