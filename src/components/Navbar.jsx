import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cart } = useGlobalContext();
  const handleToggleClick = () => {
    setToggleMenu(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar ">
      <div className="navbar-logo">
        <Link to="/">
          <img className="navbar-my" src={logo} width={100} alt="" />
        </Link>

        <Link className="cart-smallscreen" to="/cart">
          <div className="cart">
            <AiOutlineShoppingCart
              size={25}
              style={{ marginBottom: "2rem", marginLeft: "1rem" }}
            />
            <h1 className="cart-h1">{cart.length}</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cubes">
            <li>Cubes</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <div className="cart-bigscreen">
            <Link to="/cart">
              <div className="cart">
                <AiOutlineShoppingCart
                  size={25}
                  style={{ marginTop: "2px", marginLeft: "1rem" }}
                />
                <h1 className="cart-h1">{cart.length}</h1>
              </div>
            </Link>
          </div>
        </ul>
      </div>
      <div className="navbar-links-smallscreen ">
        {!toggleMenu && (
          <CgMenuGridR
            className="navbar-links-smallscreen-menu"
            color="black"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar-links-smallscreen-overlay  slide-bottom">
            <AiFillCloseCircle
              className="overlay-close"
              fontSize="1.5em"
              color="#white"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-links-smallscreen">
              <Link to="/about">
                <li onClick={() => handleToggleClick()}>About</li>
              </Link>
              <Link to="/cubes">
                <li onClick={() => handleToggleClick()}>Cubes</li>
              </Link>
              <Link to="/blog">
                <li onClick={() => handleToggleClick()}>Blog</li>
              </Link>
              <Link to="/contact">
                <li onClick={() => handleToggleClick()}>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
