import React from "react";
import "./TechModule.css";


const Tech = () => {
  return (
    <div id="Tech">
    <div className=" mt-5">
      <div className=" heading">
        <h1>Tech Stack</h1>
        <div className=" borderBottom" />
      </div>

      <div className="container">
        <div className="logoWrapper">
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-javascript-plain colored" />
          <span>JAVASCRIPT</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-react-original colored" />
          <span>REACT</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-redux-original" />
          <span>REDUX</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-reactbootstrap-original colored"></i>
          <span>BOOTSTRAP</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-materialui-plain colored"></i>
          <span>MUI</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-java-plain colored"></i>
          <span>JAVA</span>
        </div>
        <div className="logoWrapper">
          <i className="devicon-github-original colored"></i>
          <span>GITHUB</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tech;
