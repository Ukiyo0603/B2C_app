import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  // const handlePlaceOrderClick = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/api/payment/');
  //     window.location.href = response.data.payment_url;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const placeOrderButton = document.querySelector('.order-button');
  //   placeOrderButton.addEventListener('click', handlePlaceOrderClick);

  //   return () => {
  //     placeOrderButton.removeEventListener('click', handlePlaceOrderClick);
  //   };
  // }, []);

  const [orderobj, setorderobj] = useState({
    "product":"abc",
    "customer":"cde",
    "quantity":4,
    "price":120,
    "address":"puneeee",
    "phone":"9900990099",
    "date":"08/05/2023",
    "status":true
  });


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
        <button className="order-button" onClick={() => navigate("/payment", { state: { obj: { orderobj } } })}>Place Order</button>
      </div>
    </div>
  );
};

export default Order;
