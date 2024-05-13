import React from "react";
import "./ProjectModule.css";
import Project1 from "../Images/Project1.png";
import Project2 from "../Images/Project2.png";
import Project3 from "../Images/Project3.png";

const Project = () => {
  return (
    <>
      <div className=" mt-5">
        <div className=" heading">
          <h1>Projects</h1>
          <div className=" borderBottom" />
        </div>

        {/* Project -1 */}

        <div className="container text-center  rounded-5 bg-white p-3 shadoww">
          <div className="row homeorder ">
            <div className="col-lg-6    project-image   ">
              <img
                src={Project1}
                alt=" Animation"
                className="rounded"
                // height={350}
                // width={550}
              />
            </div>
            <div className="col-lg-6   ">
              <h2 className="Project-name">News Application</h2>
              <p className="text">
                The News and Weather App is designed to keep users informed and
                engaged by providing access to news from around the world,
                categorized by their interests and preferences. Additionally,
                the integrated weather feature offers real-time weather updates.
                <br /><br/>
                <b>Tech Stack - : HTML CSS Javascript React Bootstrap</b>
              </p>

              <div className="">
                
                <button class="Download-button mx-auto"
                 onClick={() =>
                  window.open(
                    "https://github.com/Pardeepsharma01/News-App",
                    "_blank"
                  )
                }
                >
                  <span>Github</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}

        <div className="container text-center  bg-white p-3 rounded-5 shadoww">
          <div className="row homeorder ">
            <div className="col-lg-6    project-image ">
              <img
                src={Project2}
                alt=" Animation"
                className="rounded"
                height={350}
                width={550}
              />
            </div>
            <div className="col-lg-6  ">
              <h2 className="Project-name" >Social Media page </h2>
              <p className="text">
                The primary goal of this project is to develop a responsive
                social networking page inspired by Facebook, using React.js and
                Material-UI. The application will focus on user-friendly
                features, responsiveness, and customization options such as dark
                mode. Additionally, users will be able to create posts through a
                convenient modal interface.
                <br /><br/>
                <b>Tech Stack - : HTML CSS Javascript React Material UI</b>
              </p>

              <div
                className=" button-link"
                
              >
                 <button class="Download-button"
                  onClick={() =>
                    window.open(
                      "https://github.com/Pardeepsharma01/Social-Media-Page",
                      "_blank"
                    )
                  }
                 >
                  <span>Github</span>
                </button>
                <button class="Download-button"
                onClick={() =>
                  window.open(
                    "https://main.d36empy9lkbz7s.amplifyapp.com/",
                    "_blank"
                  )
                }
                >
                  <span>Live</span>
                </button>
                
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}

        <div className="container text-center  bg-white rounded-5 p-3 shadoww">
          <div className="row homeorder ">
            <div className="col-lg-6     project-image ">
              <img
                src={Project3}
                alt=" Animation"
                className="rounded"
                height={350}
                width={550}
              />
            </div>
            <div className="col-lg-6  ">
              <h2 className="Project-name">Medical Store Management System</h2>
              <p className="text">
                A Medical Store Management System is a software solution
                designed to streamline the operations of a pharmacy or medical
                store. It helps manage inventory, track sales, and handle
                {/* prescription records efficiently. This system also aids in
                maintaining accurate stock levels, and improving customer
                service by ensuring the availability of essential medicines and
                products. It contributes to the overall organization and
                productivity of the medical retail business. */}
                <br /><br/>
                <b>Tech Stack - : Java Swing JDBC </b>
              </p>

              <div className="">
              <button class="Download-button mx-auto"
               onClick={() =>
                window.open(
                  "https://github.com/Pardeepsharma01/Medical-Store-Management-System",
                  "_blank"
                )
              }
              >
                  <span>Github</span>
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
