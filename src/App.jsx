import { useState } from "react";
import "./App.css";

import { Navbar, About, Blog, Cubes, Contact, Home, End } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cubes" element={<Cubes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <End />
    </>
  );
}

export default App;
