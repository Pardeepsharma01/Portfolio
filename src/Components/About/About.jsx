import React from "react";
import  "./AboutModule.css";

const About = () => {
  return (
    <>
    <div id="About">
    <div className="container custom-container text-center  ">
     {/* <div className="row homeorder "> */}
       <div className="col-lg   ">
       <h1 className="heading  p-2 mt-3">About Myself</h1>
          <div className=" borderBottom mb-3" />
          <p className="text fw-normal lh-base bg-white rounded-4 p-3">
            Greetings! I'm <b>Pardeep Sharma</b>, a passionate developer with
            a flair for creating immersive and user-friendly web experiences. My
            journey into the world of coding began with a fascination for
            crafting visually appealing and responsive websites. Over the years,
            I've honed my skills, specializing in two powerhouse technologies:
            React and Java.I thrive on building dynamic and efficient user
            interfaces using React. From creating reusable components to
            managing state and props, I bring a deep understanding of React's
            ecosystem to every project.With a solid foundation in Java, I
            navigate the backend with ease. Whether it's integrating APIs or
            ensuring seamless communication between the frontend and backend,
            Java is a powerful tool in my development arsenal.
          </p>
        </div>
        </div>
        </div>
       
    </>
     
  );
};

export default About;
