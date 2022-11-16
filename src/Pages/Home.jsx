import React from "react";
import AboutCard from "../Components/AboutCard/AboutCard";
// import DataCompany from "./Components/DataCompany/DataCompany";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className='App'>
        <div className='nav'>
          <Navbar />
        </div>
        {/* <div className="data">
        <DataCompany />
      </div> */}
        <div className='at'>
          <AboutCard />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
