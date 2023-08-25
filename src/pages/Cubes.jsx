import React, { useEffect, useState } from "react";
import "./Cubes.css";
import { allcubes, fadeIn } from "../components/cubes";
import { BiCube } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWraper";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Cubes = () => {
  const { cart, setCart } = useGlobalContext();
  const [search, setSearch] = useState("");

  const handleCart = (cube) => {
    const filter = cart.find((c) => c.id === cube.id);
    if (filter) {
      return;
    } else {
      cube.quantity = 1;
      const myCart = [...cart, cube];
      setCart(myCart);
    }
  };
  return (
    <div className="bestsellers">
      <div className="bestsellers-h1">All of our cubes</div>

      <div className="bestsellers-bestseller cubes ">
        {allcubes.map((cube, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            key={cube.id}
            className="bestsellers-bestseller-cube cubes-cube "
          >
            <Link to={`/cubes/${cube.id}`}>
              <div className="container">
                <img src={cube.img} alt="newcube" className="newcube" />

                <div className="overlay scale-up-center">
                  <div className="content">
                    <BiCube className="bicube " />
                    <h1>More</h1>
                    <h1>Details</h1>
                  </div>
                </div>
              </div>
              <div className="bestsellers-bestseller-cube-about">
                <h1 className="bestsellers-bestseller-cube-about-title">
                  {cube.title}
                </h1>
                <h1 className="bestsellers-bestseller-cube-about-price">
                  {cube.price},00 €
                </h1>
                <div className="bestsellers-bestseller-cube-about-description">
                  <p>{cube.description}</p>
                </div>
              </div>
            </Link>

            <div
              onClick={() => handleCart(cube)}
              className="bestsellers-bestseller-cube-about-cart"
            >
              <h1>Add to cart</h1>
              <LuShoppingCart />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Cubes, "cubes");
