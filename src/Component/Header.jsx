import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-2" id="header">
      <div className="flex justify-center ml-[200px] md:justify-around md:ml-[50rem] md:mt-[2rem]">
        <Link to="contact">
          <button className="btn btn-sm">Work wth me</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
