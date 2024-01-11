import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import { setUser } from "./slice/userSlice";
import { useDispatch } from "react-redux";
import supabase from "./supabase";

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data?.session?.user) {
      dispatch(setUser(data.session.user));
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
