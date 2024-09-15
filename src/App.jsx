import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Feature from "./components/Feature";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Feature />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}
