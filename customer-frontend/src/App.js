import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";
import Product from "./routes/Product";
import ProductDetail from "./routes/ProductDetail";
import PlaceOrder from "./routes/PlaceOrder";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import UpdateProfile from "./routes/UpdateProfile";
import ChangePassword from "./routes/ChangePassword";
import OTP from "./routes/OTP";
import Orders from "./routes/Orders";
import Cart from "./routes/Cart";
import Notification from "./routes/Notification";
import Wallet from "./routes/Wallet";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/subcategory" element={<Product />} />
        <Route exact path="/productdetails" element={<ProductDetail />} />
        <Route exact path="/placeorder" element={<PlaceOrder />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/updateProfile" element={<UpdateProfile />} />
        <Route exact path="/changePassword" element={<ChangePassword />} />
        <Route exact path="/otp" element={<OTP />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
