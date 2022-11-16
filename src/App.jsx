import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <div className='nav'>
          <Navbar />
        </div>
        <div className='home'>
          <Home />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
