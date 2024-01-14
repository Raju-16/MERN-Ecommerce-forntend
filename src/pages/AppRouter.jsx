import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import ProductDetailPage from "./ProductDetailPage";
import Protected from "../features/auth/components/Protected";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/cart"
        element={
          <Protected>
            <CartPage />
          </Protected>
        }
      />
      <Route
        path="/checkout"
        element={
          <Protected>
            <Checkout />
          </Protected>
        }
      />
      <Route
        path="/product-detail/:id"
        element={
          <Protected>
            <ProductDetailPage />
          </Protected>
        }
      />
    </Routes>
  );
};

export default AppRouter;
