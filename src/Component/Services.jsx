import React from "react";
import { FaCss3, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

const Services = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Technology I Use</h1>

      <div className="grid grid-cols-2 my-7 gap-y-7 technology md:grid-cols-4">
        <div className="text-center">
          <FaReact
            className="w-full hover:text-rose-500 hover:scale-105 transition-all animate-bounce"
            size={150}
            title="React"
          />
          <span className="block mt-2 text-medium text-accent  hover:text-rose-500  ">
            React
          </span>
        </div>

        <div className="text-center">
          <FaHtml5
            className="w-full hover:text-green-500 hover:scale-105 transition-all"
            size={150}
            title="HTML5"
          />
          <span className="block mt-2">HTML5</span>
        </div>

        <div className="text-center">
          <FaCss3
            className="w-full hover:text-blue-500 hover:scale-105 transition-all"
            size={150}
            title="CSS3"
          />
          <span className="block mt-2">CSS3</span>
        </div>

        {/* <div className="text-center">
          <BiLogoMongodb
            className="w-full hover:text-blue-900 hover:scale-105 transition-all"
            size={150}
            title="Python"
          />
          <span className="block mt-2">Mongodb</span>
        </div> */}

        <div className="text-center">
          <FaVuejs
            className="w-full hover:text-rose-500 hover:scale-105 transition-all"
            size={150}
            title="Vue.js"
          />
          <span className="block mt-2">Vue.js</span>
        </div>

        <div className="text-center">
          <DiNodejs
            className="w-full hover:text-rose-500 hover:scale-105 transition-all"
            size={150}
            title="Node.js"
          />
          <span className="block mt-2">Node.js</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
