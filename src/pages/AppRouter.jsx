import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRouter;
