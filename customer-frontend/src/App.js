import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";
import Product from "./routes/Product";
import ProductDetail from "./routes/ProductDetail";
import PlaceOrder from "./routes/PlaceOrder";
import SignUp from "./routes/SignUp";
import Payment from "./routes/Payment";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/productdetails" element={<ProductDetail />} />
        <Route exact path="/placeorder" element={<PlaceOrder />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;


