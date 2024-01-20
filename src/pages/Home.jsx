import React from "react";
import ProductList from "../features/product/components/ProductList";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
      <Footer />
    </>
  );
};

export default Home;
