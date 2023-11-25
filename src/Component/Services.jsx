import React from "react";
import { FaCss3, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJest,
  SiMysql,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Services = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl pb-7" id="services">
        Technology I Use
      </h1>

      <div className="grid grid-cols-4 my-7 gap-2 technology md:grid-cols-4 md:gap-x-0 md:gap-y-7">
        <div className="text-center">
          <FaReact
            className="w-full hover:text-pink-300 text-blue-400 hover:scale-105 transition-all"
            size={110}
            title="React"
          />
          <span className="block mt-2 text-medium hover:text-rose-500  ">
            React
          </span>
        </div>

        <div className="text-center">
          <FaHtml5
            className="w-full hover:text-green-500 hover:scale-105 transition-all text-green-600"
            size={100}
            title="HTML5"
          />
          <span className="block mt-2">HTML5</span>
        </div>

        <div className="text-center">
          <FaCss3
            className="w-full hover:text-blue-500 hover:scale-105 transition-all text-blue-600"
            size={100}
            title="CSS3"
          />
          <span className="block mt-2">CSS3</span>
        </div>

        <div className="text-center">
          <FaVuejs
            className="w-full hover:text-rose-500 hover:scale-105 transition-all text-accent"
            size={100}
            title="Vue.js"
          />
          <span className="block mt-2">Vue.js</span>
        </div>

        <div className="text-center">
          <DiNodejs
            className="w-full hover:text-rose-500 hover:scale-105 transition-all"
            size={100}
            title="Node.js"
          />
          <span className="block mt-2">Node.js</span>
        </div>
        <div className="text-center">
          <SiMongodb
            className="w-full hover:text-green-500 text-green-950 hover:scale-105 transition-all"
            size={100}
            title="Python"
          />
          <span className="block mt-2">Mongodb</span>
        </div>
        <div className="text-center">
          <TbBrandRedux
            className="w-full hover:text-green-500 text-[#764abc] hover:scale-105 transition-all"
            size={100}
            title="Python"
          />
          <span className="block mt-2 ">Redux</span>
        </div>
        <div className="text-center">
          <SiTailwindcss
            className="w-full hover:text-blue-800 text-[#3490dc] hover:scale-105 transition-all"
            size={100}
            title="Python"
          />
          <span className="block mt-2 ">Tailwind</span>
        </div>
        <div className="text-center">
          <SiExpress
            className="w-full hover:text-black text-black hover:scale-105 transition-all"
            size={100}
            title="Python"
          />
          <span className="block mt-2 ">Express Js</span>
        </div>
        <div className="text-center">
          <SiJest
            className="w-full hover:text-red-800 hover:scale-105 transition-all text-red-700"
            size={100}
            title="Python"
          />
          <span className="block mt-2 ">Jest</span>
        </div>
        <div className="text-center">
          <SiMysql
            className="w-full hover:text-blue-700  hover:scale-105 transition-all text-blue-500"
            size={100}
            title="MySql"
          />
          <span className="block mt-2 ">MySql</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
