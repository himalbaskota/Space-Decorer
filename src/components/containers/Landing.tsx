import React from "react";
import CommonHead from "../common/CommonHead";
import About from "../modules/LandingModule/About";
import HeroSection from "../modules/LandingModule/HeroSection";
import Product from "../modules/LandingModule/Product";

const Landing = () => {
  return (
    <main>
      <CommonHead title={"Decor"} />
      <HeroSection />
     <Product/>
     <About/>
    </main>
  );
};

export default Landing;
