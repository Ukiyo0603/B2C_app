import React from "react";
import "./First.css";
import Sidebar from "../Sidebar";
import Header from "../Header";

function First() {
  return (
    <div className="container">
      <div className="sidebar"><Sidebar /></div>
          <div className="main"><Header />
          <h1>Welcome to Customer Dashboard</h1>
          </div>
    </div>
  );
}

export default First;