import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const Work = () => {
  const handleClick = () => {
    window.open("https://github.com/Ayush433?tab=repositories");
  };
  const handleBlog = () => {
    window.open("https://github.com/Ayush433/Backend");
  };
  const handlePortfolio = () => {
    window.open("https://adhikariayush.com.np");
  };
  return (
    <section className="pt-[70px]">
      <div className="container mx-auto ">
        <div>
          <h2
            className=" h2 text-white font-bold items-center md:text-center"
            id="work"
          >
            My Latest Work
          </h2>
          <div className="mb-5">
            <button onClick={handleClick} className="btn btn-sm ">
              View All Projects
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-5 gap-y-4 lg:gap-y-12">
          <div className="">
            <div className="group relative overflow-hidden border-4 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70  w-full h-full absolute transition-all duration-300 z-40"></div>
              <img
                src="/portfolio.png"
                className="group-hover:scale-100 transition-all duration-500"
                alt="image "
              />
              <div className="absolute -bottom-full ml-[95px] group-hover:bottom-10  transition-all duration-500 z-50">
                <div
                  className="bg-[#3a2a46] border-2 rounded-2xl flex cursor-pointer "
                  onClick={handlePortfolio}
                >
                  <span className="font-bold ml-6"> Views</span>
                  <AiOutlineEye
                    size={30}
                    className="w-full text-[#a147f4] hover:scale-105 transition-all"
                  />
                </div>
                <span className="text-white font-semibold text-center mt-10  ">
                  View Live Portfolio
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative overflow-hidden border-4 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70  w-full h-full absolute transition-all duration-300 z-40"></div>
              <img
                src="/portfolio-img2.png"
                className="group-hover:scale-100 transition-all duration-500"
                alt="image "
              />
              <div className="absolute -bottom-full ml-[95px] group-hover:bottom-10 transition-all duration-500 z-50">
                <div
                  onClick={handleBlog}
                  className="bg-[#3a2a46] border-2 rounded-2xl flex cursor-pointer "
                >
                  <span className="font-bold ml-6">View</span>
                  <AiOutlineEye
                    size={30}
                    className="w-full text-[#a147f4] hover:scale-105 transition-all"
                  />
                </div>
                <span className="text-white font-semibold text-center mt-10">
                  View Live Blogs
                </span>
              </div>
            </div>
            <div className="mt-8">
              <div className="group relative overflow-hidden border-4 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70  w-full h-full absolute transition-all duration-300 z-40"></div>
                <img
                  src="/portfolio-img2.png"
                  className="group-hover:scale-100 transition-all duration-500"
                  alt="image "
                />
                <div className="absolute -bottom-full ml-[95px] group-hover:bottom-10 transition-all duration-500 z-50 ">
                  <div className="bg-[#3a2a46] border-2 rounded-2xl flex cursor-pointer">
                    <span className="font-bold ml-6">View</span>
                    <AiOutlineEye
                      size={30}
                      className="w-full text-[#a147f4] hover:scale-105 transition-all"
                    />
                  </div>
                  <span className="text-white font-semibold text-center mt-10  ">
                    View Movie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
