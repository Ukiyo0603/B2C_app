import React from "react";
import "./Home.css";
import Header from "../Header";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <ProductList /> 
      </div>
    </div>
  );
};

export default Home;
