import React from "react";
import AboutCard from "../Components/AboutCard/AboutCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import DataCompany from "./Components/DataCompany/DataCompany";

const Home = () => {
  return (
    <>
      <div className='data'>
        <DataCompany />
      </div>
      <Navbar />
      <div className='at'>
        <AboutCard />
      </div>
      <div className='data'></div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
