import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/logo.png";

import "./Navbar.css";
import CubeCanvas from "./RubiksCube/Cube";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar ">
      <div className="navbar-logo">
        <Link to="/">
          <img className="navbar-my" src={logo} width={100} alt="" />
          {/* <h1 className="navbar-my">MyCube</h1> */}
          {/* <motion.div className="navbar-cube-rotate">
            <CubeCanvas />
          </motion.div> */}
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
