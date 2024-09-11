import React from "react";
import HeroSection from "../components/HeroSection";
import CounterSection from "../components/CounterSection";
import ProductList from "../components/ProductList";
import Testimonials from "../components/Testimonials";
import HeroSection2 from "../components/HeroSection2"
import BestSeller from "../components/BestSeller";
function Home() {
  return (
     <div>
    <HeroSection />
    <CounterSection />
    <BestSeller/>
    <ProductList />
    <HeroSection2/>
    <Testimonials />
  </div> 
    
  );
}

export default Home;
