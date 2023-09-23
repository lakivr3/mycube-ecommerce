import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
        <NavLink
          exact="true"
          activeclassname="active"
          className="navbar-my flex"
          to="/"
        >
          <img className="navbar-my" src={logo} alt="" />
        </NavLink>

        <NavLink className="cart-smallscreen" to="/cart">
          <div className="cart">
            <AiOutlineShoppingCart
              size={25}
              style={{ marginBottom: "2rem", marginLeft: "1rem" }}
            />
            <span className="cart-h1">{cart.length}</span>
          </div>
        </NavLink>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink activeclassname="active " to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active " to="/cubes">
              Cubes
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contact">
              Contact
            </NavLink>
          </li>
          <div className="cart-bigscreen">
            <NavLink to="/cart">
              <div className="cart">
                <AiOutlineShoppingCart
                  size={25}
                  style={{ marginTop: "2px", marginLeft: "1rem" }}
                />
                <span className="cart-h1">{cart.length}</span>
              </div>
            </NavLink>
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
              <li onClick={() => handleToggleClick()}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li onClick={() => handleToggleClick()}>
                <NavLink to="/cubes">Cubes</NavLink>
              </li>
              <li onClick={() => handleToggleClick()}>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li onClick={() => handleToggleClick()}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
