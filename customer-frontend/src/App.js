import React from "react";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Product from "./routes/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
