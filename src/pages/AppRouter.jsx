import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
