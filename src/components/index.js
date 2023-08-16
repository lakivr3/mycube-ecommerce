import Navbar from "./Navbar";
import RubiksImage from "./RubiksImage";
import NewItems from "./NewItems";
import About from "../pages/About";
import BestSellers from "./BestSellers";
import Blog from "../pages/Blog";
import End from "./End";
import Cubes from "../pages/Cubes";
import News from "./News";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export {
  Home,
  Contact,
  News,
  Cubes,
  Navbar,
  RubiksImage,
  NewItems,
  About,
  BestSellers,
  Blog,
  End,
};
