import React from "react";
import AboutCard from "../Components/AboutCard/AboutCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import DataCompany from "../Components/DataCompany/DataCompany";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='data'>
        <DataCompany />
      </div>
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
