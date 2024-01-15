import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import ProductDetailPage from "./ProductDetailPage";
import Protected from "../features/auth/components/Protected";
import OrderSuccessPage from "./OrderSuccessPage";
import UserOrdersPage from "./UserOrderPage";
import PageNotFound from "./PageNotFound";
import UserProfilePage from "./UserProfilePage";

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
      <Route path="/order-success/:id" element={<OrderSuccessPage />} />
      <Route path="/orders" element={<UserOrdersPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
