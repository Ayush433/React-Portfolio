import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

const Contact = () => {
  const handleClick = () => {
    window.open("https://www.facebook.com/adhikariayush12/", "blank");
  };
  const clickInstagram = () => {
    window.open("https://www.instagram.com/ig_ayushadh/", "blank");
  };
  const handleGmail = () => {
    const email = "adhikariayush19@gmail.com";
    const subject = "Regarding your inquiry";
    const body = "";
    const gmailUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl);
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/ayush-adhikari-9b3273222/");
  };
  const handleGithub = () => {
    window.open("https://github.com/Ayush433");
  };
  return (
    <div className="p-9 " id="contact">
      <h1 className="text-center font-bold text-4xl mt-[2rem] mb-[4rem]">
        Reach me out{" "}
      </h1>

      <div className="grid grid-cols-3 gap-y-9 gap-x-6 my-7  justify-center mb-[6rem] md:grid-cols-5 md:gap-x-7 ">
        <div className="text-center">
          <Link>
            <BsFacebook
              className="w-full hover:text-blue-700 text-blue-500 hover:scale-105 transition-all  cursor-pointer"
              size={50}
              title="React"
              onClick={handleClick}
            />
          </Link>
        </div>

        <div className="text-center">
          <FaInstagramSquare
            className="w-full hover:text-pink-500 hover:scale-105 text-[#C13584] transition-all cursor-pointer"
            size={50}
            title="Instagram"
            onClick={clickInstagram}
          />
        </div>

        <div className="text-center">
          <FaGithub
            className="w-full hover:text-[#334155] text-[#475569] hover:scale-105 transition-all cursor-pointer"
            size={50}
            title="Github"
            onClick={handleGithub}
          />
        </div>
        <div className="text-center">
          <SiGmail
            className="w-full hover:text-red-500 text-red-600 hover:scale-105 transition-all cursor-pointer"
            size={50}
            title="gmail"
            onClick={handleGmail}
          />
        </div>

        <div className="text-center">
          <GrLinkedin
            className="w-full hover:text-blue-600 text-blue-600 hover:scale-105 transition-all cursor-pointer"
            size={50}
            title="Linkedin"
            onClick={handleLinkedin}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
