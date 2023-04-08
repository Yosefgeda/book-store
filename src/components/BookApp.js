import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import BooksLogic from "./BooksLogic";
import Categories from "./Categories";

import '../styles/app.css'

const App = () => {

  return (

  <div className="container">
    <Navbar />

      <Routes>
        <Route path="/" element={<BooksLogic />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    
  </div>
);
};

export default App;
