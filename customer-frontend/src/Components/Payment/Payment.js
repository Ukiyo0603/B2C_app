import React from "react";
import HomePage from './HomePage';
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location =useLocation();
  let ordobj = location.state.obj.orderobj;
  console.log(ordobj);

  return (
    <>
      <HomePage ordobj={ordobj} />
    </>
  );
};

export default Payment;