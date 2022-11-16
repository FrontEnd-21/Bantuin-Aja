import { useState } from "react";

import "./App.css";
import AboutCard from "./Components/AboutCard/AboutCard";
import DataCompany from "./Components/DataCompany/DataCompany";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className="nav">
        <Navbar />
      </div>
      <div className="data">
        <DataCompany />
      </div>
      <div className="at">
        <AboutCard/>
      </div>
      <div className="footer">
        <Footer />
      </div>
      
      
      
    </div>
  ) 
}

export default App;
