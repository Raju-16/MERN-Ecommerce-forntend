import React from "react";
import ProductList from "../features/product/components/ProductList";
import Navbar from "../features/navbar/Navbar";

const Home = () => {
  return (
    <Navbar>
      <ProductList />
    </Navbar>
  );
};

export default Home;
