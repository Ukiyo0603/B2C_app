import React from "react";
import "./Home.css";
import Header from "../Header";
import Detail from "./Detail";

const Home = () => {
  return (
    <div className="major-container">
      <Header />
      <div className="C">
        <Detail />
      </div>
    </div>
  );
};

export default Home;
