import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Product from "./routes/Product";
import ProductDetail from "./routes/ProductDetail";
import PlaceOrder from "./routes/PlaceOrder";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/productdetails" element={<ProductDetail />} />
        <Route exact path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
