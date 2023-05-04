import React from "react";
import "./Home.css";
import Header from "../Header";
import Signup from "./Signup";

const Home = () => {
  return (
    <div className="major-container">
      <Header screenname={ "CUS 102" } />
      <div className="C">
        <Signup />
      </div>
    </div>
  );
};

export default Home;
