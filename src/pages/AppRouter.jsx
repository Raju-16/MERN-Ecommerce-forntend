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
import Logout from "../features/auth/components/Logout";
import ForgotPassword from "../features/auth/components/ForgotPassword";
import ProtectedAdmin from "../features/auth/components/ProtectedAdmin";
import AdminHome from "./AdminHome";
import AdminProductDetailPage from "./AdminProductDetailPage";
import AdminProductFormPage from "./AdminProductFormPage";

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
      <Route
        path="/"
        element={
          <ProtectedAdmin>
            <AdminHome />
          </ProtectedAdmin>
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
      <Route path="/logout" element={<Logout />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Routes */}
      <Route
        path="/"
        element={
          <ProtectedAdmin>
            <AdminHome />
          </ProtectedAdmin>
        }
      />
      <Route
        path="/admin/product-detail/:id"
        element={
          <ProtectedAdmin>
            <AdminProductDetailPage />
          </ProtectedAdmin>
        }
      />
      <Route
        path="/admin/product-form"
        element={
          <ProtectedAdmin>
            <AdminProductFormPage />
          </ProtectedAdmin>
        }
      />
      <Route
        path="/admin/product-form/edit/:id"
        element={
          <ProtectedAdmin>
            <AdminProductFormPage />
          </ProtectedAdmin>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
