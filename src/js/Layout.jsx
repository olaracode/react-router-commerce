import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./component/Navbar";
import ProductsDetails from "./views/ProductDetails";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
