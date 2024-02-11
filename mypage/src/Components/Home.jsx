import React from "react";
import HomeModule from "./HomeModule.css";
import Pardeep from "./Images/Pardeep.jpg";

const Home = () => {
  return (
    <div className="container-fluid text-center border border-primary">
      <div className="row homeorder ">
        <div className="col-lg-6  order-lg-2 border border-danger ">
        <img src={Pardeep} alt="Photo" className="rounded-circle photo" height={350} width={350} />

        </div>
        <div className="col-lg-6 order-lg-1 border border-danger">
            <p>Hey I'm</p>
            <p>Pardeep Sharma</p>
            <p>I am web developer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
