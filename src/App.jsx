import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className='App'>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
