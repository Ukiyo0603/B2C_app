import React from "react";
import "./Home.css";
import Header from "../Header";
import Order from "./Product"

const Home = () => {
  return (
    <div className="major-container">
      <Header />
      <div className="C">
        <Order />
      </div>
    </div>
  );
};

export default Home;
