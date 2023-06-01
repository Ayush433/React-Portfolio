import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-2" id="header">
      <div className="flex justify-center items-center  ">
        <img className="h-[100px] w-[200px]" src={logo} alt="logo" />
        <button className="btn btn-sm">Work wth me</button>
      </div>
    </div>
  );
};

export default Header;
