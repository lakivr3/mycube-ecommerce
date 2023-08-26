import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cart } = useGlobalContext();
  const handleToggleClick = () => {
    setToggleMenu(false);
    window.scrollTo(0, 0);
  };

  const handleActive = () => {};
  return (
    <nav className="navbar ">
      <div className="navbar-logo">
        <NavLink exact activeClassName="active" className="navbar-my" to="/">
          <img className="navbar-my" src={logo} width={100} alt="" />
        </NavLink>

        <NavLink className="cart-smallscreen" to="/cart">
          <div className="cart">
            <AiOutlineShoppingCart
              size={25}
              style={{ marginBottom: "2rem", marginLeft: "1rem" }}
            />
            <h1 className="cart-h1">{cart.length}</h1>
          </div>
        </NavLink>
      </div>
      <div className="navbar-links">
        <ul>
          <NavLink activeClassName="active " to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active " to="/cubes">
            <li>Cubes</li>
          </NavLink>
          <NavLink activeClassName="active" to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Contact</li>
          </NavLink>
          <div className="cart-bigscreen">
            <NavLink to="/cart">
              <div className="cart">
                <AiOutlineShoppingCart
                  size={25}
                  style={{ marginTop: "2px", marginLeft: "1rem" }}
                />
                <h1 className="cart-h1">{cart.length}</h1>
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
