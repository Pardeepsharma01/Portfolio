import React from "react";
import  "./AboutModule.css";
// import giphy from "../Images/giphy.gif";

const About = () => {
  return (
    <>
    {/* <div className="container text-center border border-primary">
      <div className="row homeorder ">
        <div className="col-lg-6   border border-danger ">
          <img
            src={giphy}
            alt=" Animation"
            className="rounded coding-image"
            height={360}
            width={500}
           
          />
        </div>
        
        <div className="col-lg-6  border border-danger  ">
          <h2 className="heading">About Myself</h2>
          <div className=" borderBottom" />
          <p className="text fw-normal lh-base">
            Greetings! I'm Pardeep Sharma, a passionate frontend developer with
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
    </div> */}

    <div className="container custom-container text-center border border-primary ">
     {/* <div className="row homeorder "> */}
       <div className="col-lg  border border-danger ">
       <h2 className="heading">About Myself</h2>
          <div className=" borderBottom" />
          <p className="text fw-normal lh-base bg-white rounded p-3">
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
        {/* </div> */}
        </div>
        
       
    </>
     
  );
};

export default About;
