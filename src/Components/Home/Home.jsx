import React from "react";
import "./HomeModule.css";
import Pardeep from "../Images/Pardeep.jpg";


const Home = () => {
  // const handleDownloadClick = () => {
  //   // Replace 'your-file-url' with the actual URL of the file you want to download
  //   const fileUrl =
  //     "https://drive.google.com/file/d/11TU8qPK1Aaze0S8Bw0SeiW8CcM1tzPfF/view?usp=sharing";

  //   // Create a hidden anchor element
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = fileUrl;
  //   downloadLink.download = "Pardeep Sharma CV"; // Specify the default file name

  //   // Append the anchor to the document and trigger a click event
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();

  //   // Remove the anchor from the document
  //   document.body.removeChild(downloadLink);
  // };

  const handleDownloadClick = () => {
    const fileUrl =
      "https://drive.google.com/file/d/11TU8qPK1Aaze0S8Bw0SeiW8CcM1tzPfF/view?usp=sharing";

    window.open(fileUrl, '_blank');
  };

  return (
    <div id="Home">
    <div className="container-fluid text-center  ">
      <div className="row homeorder visual">
        <div className="col-lg-6  order-lg-2   profileImage">
          <img
            src={Pardeep}
            alt="Pardeep Sharma"
           
          />
        </div>

        <div className="col-lg-6 order-lg-1   txt_align ">
          <div className="  box_margin  ">
            <p className="text_style">Hey👋,I'm</p>
            <p className="text_style">Pardeep Sharma</p>
            <h3>
              {/* I worked on Technology<br/> React And Java */}
              I'm Frontend Developer worked on React And Java 
            </h3>
           

            <button className="Download-button mt-5" onClick={handleDownloadClick}>
              <svg
                viewBox="0 0 640 512"
                width="20"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                ></path>
              </svg>
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
