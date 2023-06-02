import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className="p-9 " id="contact">
      <h1 className="text-center font-bold text-4xl mt-[2rem] mb-[4rem]">
        Reach me out{" "}
      </h1>

      <div className="grid grid-cols-5 my-7 gap-y-4 gap-x-[-10px] technology justify-center mb-[6rem] ">
        <div className="text-center">
          <Link>
            <BsFacebook
              className="w-full hover:text-blue-700 hover:scale-105 transition-all animate-bounce cursor-pointer "
              size={80}
              to="https://www.facebook.com/adhikariayush12/"
              title="React"
            />
          </Link>
        </div>

        <div className="text-center">
          <FaInstagramSquare
            className="w-full hover:text-pink-500 hover:scale-105 transition-all cursor-pointer"
            size={80}
            title="Instagram"
          />
        </div>

        <div className="text-center">
          <FaGithub
            className="w-full hover:text-blue-500 hover:scale-105 transition-all cursor-pointer"
            size={80}
            title="Github"
          />
        </div>
        <div className="text-center">
          <SiGmail
            className="w-full hover:text-red-500 hover:scale-105 transition-all cursor-pointer"
            size={80}
            title="gmail"
          />
        </div>

        <div className="text-center">
          <GrLinkedin
            className="w-full hover:text-blue-900 hover:scale-105 transition-all cursor-pointer"
            size={80}
            title="Linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
