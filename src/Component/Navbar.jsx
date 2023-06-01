import React from "react";
import { Link } from "react-scroll";
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FaUserTie } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50">
      <div className="container max-auto">
        <div className=" flex w-full bg-black/20 h-[46px] backdrop-blur-2xl rounded-full max-w-[360px] px-5 justify-between text-2xl text-white/50  items-center  m-auto ml-[500px]">
          <Link
            to="home"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-200}
          >
            <FcHome />
          </Link>
          <Link
            to="contact"
            className="cursor-pointer "
            smooth={true}
            duration={500}
          >
            <FcContacts />
          </Link>
          <Link
            to="about"
            className="cursor-pointer "
            smooth={true}
            duration={500}
          >
            <FaUserTie />
          </Link>
          <Link
            to="services"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <MdWork />
          </Link>
          {/* <Link to = "" className="cursor-pointer">
            <FcContacts />
          </Link> */}
          <Link
            to="work"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <BsPersonWorkspace />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
