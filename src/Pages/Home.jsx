import React from "react";
import AboutCard from "../Components/AboutCard/AboutCard";
// import DataCompany from "./Components/DataCompany/DataCompany";

const Home = () => {
  return (
    <>
      <div className='data'>
        <DataCompany />
      </div>
      <div className='at'>
        <AboutCard />
      </div>
    </>
  );
};

export default Home;
