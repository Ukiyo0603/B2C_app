import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";
import User from "../Assets/user.png";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`container2 ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
          <img src={User} alt="User profile" className="user-profile" />
          <h3 className="user-name">User Name</h3>
          <p className="user-email">user@email.com</p>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/home">
              <FaHome size={25} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <FaShoppingCart size={25}/>
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser size={25}/>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FaSignOutAlt size={25}/>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
