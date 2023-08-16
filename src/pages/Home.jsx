import React from "react";
import RubiksImage from "../components/RubiksImage";
import NewItems from "../components/NewItems";
import BestSellers from "../components/BestSellers";
import News from "../components/News";
import AboutUs from "../components/AboutUs";
import Testemonials from "../components/Testemonials";

const Home = () => {
  return (
    <>
      <RubiksImage />
      <NewItems />
      <AboutUs />
      <BestSellers />
      <Testemonials />
      <News />
    </>
  );
};

export default Home;
