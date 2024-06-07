import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Tech from "./Components/Tech/Tech";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { DNA } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer if the component is unmounted
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Tech />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
