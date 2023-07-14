import { MotionConfig } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CvPdf from "../assets/ Cv.pdf";
import Contact from "./Contact";

const Home = () => {
  const handleDownloadCv = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = CvPdf;
    downloadLink.download = "Cv-A.pdf";
    downloadLink.click();
  };
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const handleContactClick = () => {
    setShowForm(true);
  };
  const handleFormSubmit = () => {
    setShowForm(false);
  };
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-[50px]" id="home">
      <div className="grid grid-cols-1 items-center p-[2%] md:grid-cols-2">
        <div className="h-[400px] md:h-[600px]">
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
                "Node Js", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "MERN Developer",
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
            I am a full-stack developer from Nepal. I have a strong passion for
            designing elegant websites that provide exceptional user
            experiences.
            <br /> <br />
            I am particularly enthusiastic about exploring various aspects of
            the frontend stack and embarking on exciting projects. As an
            autonomous freelancer and blogger, I take pleasure in crafting
            engaging blog posts and indulging in literary works.
            <br /> <br />
            In my perspective, every endeavor becomes an art when infused with
            conscious effort. If you wish to get in touch, feel free to connect
            with me through my social media channels.
          </p>
          <div className="flex justify-center items-center mt-7 ">
            <button className="btn btn-lg mr-[30px]  ">
              <Link t0="" className="text-white" onClick={handleContactClick}>
                Hire Me
              </Link>
            </button>
            <button className="btn btn-lg" onClick={handleDownloadCv}>
              Download Cv
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="contact-form-overlay">
          <div ref={formRef}>
            {showForm ? (
              <Contact handleFormSubmit={handleFormSubmit} />
            ) : (
              <div>Thank you for submitting the form!</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
