import "./App.css";

import { Navbar, About, Blog, Cubes, Contact, Home, End } from "./components";
import { Routes, Route } from "react-router-dom";
import CubeDetails from "./pages/CubeDetails";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cubes" element={<Cubes />} />
        <Route path="/cubes/:id" element={<CubeDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <End />
    </>
  );
}

export default App;
