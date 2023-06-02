import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CvPdf from "../assets/ Cv.pdf";

const Home = () => {
  const handleDownloadCv = () => {
    // Replace "link_to_cv.pdf" with the actual URL or file path of your CV file
    const downloadLink = document.createElement("a");
    downloadLink.href = CvPdf;
    downloadLink.download = "Cv.pdf"; // Optional: Specify the filename for the downloaded file
    downloadLink.click();
  };
  return (
    <div className="mb-[50px]" id="home">
      <div className="grid grid-cols-1 items-center p-[2%] md:grid-cols-2">
        <div className="h-[550px]">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-[20px]">
            Hi My Name is Ayush
          </h1>
          <h2 className="py-2 text-black font-bold text-2xl">
            <TypeAnimation
              sequence={[
                "React", // Types 'One'
                2000, // Waits 1s
                "Node js", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "React Nodejs, Developer",
                4000, // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
              }}
              className="text-accent"
            />
          </h2>
          <p>
            I'm a front-end developer located in Nepal. I love to create simple
            yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books.
            <br /> <br />I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
          </p>
          <div className="flex justify-center items-center mt-7 ">
            <button className="btn btn-lg mr-[30px]  ">
              <Link t0="" className="text-white">
                Hire Me
              </Link>
            </button>
            <button className="btn btn-lg" onClick={handleDownloadCv}>
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
