import React, { useEffect, useState } from "react";
import "./NewItems.css";
import { newcubes } from "./cubes";
import { BiCube } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const NewItems = () => {
  const { cart, setCart } = useGlobalContext();
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false); //550-2
  const [isMiddleScreen, setIsMiddleScreen] = useState(false); //768-3
  const [isLargeScreen, setIsLargeScreen] = useState(false); //1190-5

  const handleCart = (cube) => {
    const filter = cart.find((c) => c.id === cube.id);
    if (filter) {
      return;
    } else {
      cube.quantity = 1;
      const myCart = [...cart, cube];
      setCart(myCart);
      console.log(filter);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1190);

      setIsMiddleScreen(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 550);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClicked = () => {
    navigate("/cubes");
    window.scrollTo(0, 0);
  };
  return (
    <div className="bestsellers">
      <div className="bestsellers-h1">New products</div>
      <div className="bestsellers-p">
        Original Rubik's Cubes and various puzzles and brain teasers from
        Rubik's Workshop, popular competition cubes from brands such as MoYu,
        ShengShou, LanLan, QiYi, Yj and other top cube manufacturers.
      </div>
      <div className="bestsellers-bestseller">
        {newcubes.map((cube, index) => {
          if (isLargeScreen && index >= 4) {
            return null;
          } else if (isMiddleScreen && index >= 3) {
            return null;
          } else if (isSmallScreen && index >= 2) {
            return null;
          } else {
            return (
              <div
                key={cube.id + index}
                className="bestsellers-bestseller-cube"
              >
                <Link key={cube.id} to={`/cubes/${cube.id}`}>
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
              </div>
            );
          }
        })}
      </div>
      <button
        onClick={handleClicked}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-[200px]  rubiksimage-div-btn"
      >
        ALL PRODUCTS
      </button>{" "}
    </div>
  );
};

export default NewItems;
