import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Tech from "./Components/Tech/Tech";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css"
// import './index.css'
// import {BrowserRouter as Route, Router, Routes } from "react-router-dom";
function App() {
  return (
 <>
 <Navbar/>
 <Home/>
 <About/>
 <Tech/>
 <Project/>
 <Contact/>
 <Footer/>

{/* <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router> */}
 </>
  );
}

export default App;
