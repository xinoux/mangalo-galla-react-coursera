import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";
import Homepage from "./components/homepage.js";
import Footer from "./components/footer.js";
import Shop from "./components/shop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/collections.js";
import About from "./components/about.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="Content">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/collections" element={<Collections />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
