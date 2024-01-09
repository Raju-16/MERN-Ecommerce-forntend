import React from "react";
import Login from "../features/auth/components/Login";
import Navbar from "../features/navbar/Navbar";

const LoginPage = () => {
  return (
    <Navbar>
      <Login />
    </Navbar>
  );
};

export default LoginPage;
