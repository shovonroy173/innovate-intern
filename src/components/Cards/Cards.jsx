import Image from "next/image";
import React from "react";
import img from "@/assets/profile.jpg";

const CardSection = () => {
  return (
    <section className="flex justify-center items-center flex-col md:flex-row space-y-10 space-x-10  lg:space-x-72 px-16">
      {/* Text Section */}
      <div className="w-full md:w-[600px] flex flex-col items-center">
        <p className="text-gray-900 lg:text-xl font-semibold mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="w-[200px] px-6 py-2 border-2 border-purple-800 text-purple-800 font-bold rounded-lg hover:bg-purple-800 hover:text-white transition">
          Explore Now
        </button>
      </div>

      {/* Card Stack Section */}
      {/* <div className=""> */}
        <div className="relative">
          {/* Top Card */}
          <div
            className=" bg-cyan-900 w-full h-full md:w-[395px] md:h-[395px] rounded-xl text-white p-6 shadow-lg"
            style={{ zIndex: 3 }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl font-bold italic">Lorem ipsum</p>
                <p className="mt-2 text-xs text-gray-300 flex items-center">
                  <Image
                    src={img}
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full mr-1 w-6 h-6 "
                  />
                  Nicole Warren
                </p>
              </div>

              <div className="mt-16 bg-gray-400/40 p-2 rounded-xl border border-gray-400">
                <p className="font-semibold">Lawrance Stroll</p>
                <p className="text-sm ">Hegejustho oifuol foestihoo</p>
              </div>
            </div>
          </div>

          {/* Middle Card */}
          <div className="absolute bg-fuchsia-700 w-5/6 h-5/6  md:w-[355px] md:h-[355px] rounded-xl p-6 top-[20px] left-[60px] -z-20"></div>

          {/* Bottom Card */}
          <div className="absolute bg-violet-950 w-7/12 h-4/6 md:w-[300px] md:h-[305px] rounded-xl p-6 top-[40px] left-[140px] -z-30"></div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default CardSection;
