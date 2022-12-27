import React from "react";
import About from "../components/About";
import Category from "../components/Category";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HowItWork from "../components/HowItWork";
import Nav from "../components/Nav";
import RecentJob from "../components/RecentJob";
import Search from "../components/Search";
import Status from "../components/Status";

const Home = () => {
  return (
    <div className="w-full">
      <Search />
      <Category />
      <RecentJob />
      <About />
      <HowItWork />
      <Status />
      <Faq />
    </div>
  );
};

export default Home;
