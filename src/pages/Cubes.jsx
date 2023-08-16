import React from "react";
import "./Cubes.css";
import { allcubes } from "../components/cubes";
import { BiCube } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

const Cubes = () => {
  return (
    <div className="bestsellers">
      <div className="bestsellers-h1">All of our cubes</div>

      <div className="bestsellers-bestseller cubes">
        {allcubes.map((cube) => (
          <div key={cube.id} className="bestsellers-bestseller-cube cubes-cube">
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
                {cube.price},00 din
              </h1>
              <div className="bestsellers-bestseller-cube-about-description">
                <p>{cube.description}</p>
              </div>
            </div>
            <div className="bestsellers-bestseller-cube-about-cart">
              <h1>Add to cart</h1>
              <LuShoppingCart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cubes;
