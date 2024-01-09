import React from "react";
import Signup from "../features/auth/components/Singup";
import Navbar from "../features/navbar/Navbar";

const SignupPage = () => {
  return (
    <Navbar>
      <Signup />
    </Navbar>
  );
};

export default SignupPage;
