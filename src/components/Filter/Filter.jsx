"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "@/assets/profile.jpg";
import bg1 from "@/assets/bg1.png";
import bg2 from "@/assets/bg2.png";
import bg3 from "@/assets/bg3.png";
import bg4 from "@/assets/bg4.png";

const categories = [
  {
    key: "art",
    title: "Art stuff",
    tokens: "58 TK",
    total: "1/10",
    mainBg: bg1,
    titleColor: "text-fuchsia-800",
    btn1: `bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 `,
    btn1Hover: `hover:bg-gradient-to-r hover:from-fuchsia-800 hover:to-fuchsia-600 `,
    btn2: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
  },
  {
    key: "celebrities",
    title: "ABCD",
    tokens: "777 TK",
    total: "1/19",
    mainBg: bg2,
    titleColor: "text-green-700",
    btn1: `bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 `,
    btn1Hover: `hover:bg-gradient-to-r hover:from-fuchsia-800 hover:to-fuchsia-600 `,
    btn2: `bg-gradient-to-r from-indigo-600 to-indigo-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 `,
  },
  {
    key: "gaming",
    title: "EFGH",
    tokens: "58 TK",
    total: "1/14",
    mainBg: bg3,
    titleColor: "text-grey-800",
    btn1: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
    btn2: `bg-gradient-to-r from-purple-600 to-red-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 `,
  },
  {
    key: "sport",
    title: "XYZ",
    tokens: "0",
    total: "1/08",
    mainBg: bg4,
    titleColor: "text-grey-800",
    btn1: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
    btn2: `bg-gradient-to-r from-purple-600 to-red-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 `,
  },
  {
    key: "music",
    title: "Art stuff",
    tokens: "58 TK",
    total: "1/10",
    mainBg: bg1,
    titleColor: "text-fuchsia-800",
    btn1: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
    btn2: `bg-gradient-to-r from-red-200 to-red-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-red-500 hover:to-red-200 `,
  },
  {
    key: "gaming",
    title: "ABCD",
    tokens: "777 TK",
    total: "1/19",
    mainBg: bg2,
    titleColor: "text-green-700",
    btn1: `bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 `,
    btn1Hover: `hover:bg-gradient-to-r hover:from-fuchsia-800 hover:to-fuchsia-600 `,
    btn2: `bg-gradient-to-r from-indigo-600 to-indigo-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 `,
  },
  {
    key: "celebrities",
    title: "EFGH",
    tokens: "58 TK",
    total: "1/14",
    mainBg: bg3,
    titleColor: "text-grey-800",
    btn1: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
    btn2: `bg-gradient-to-r from-purple-600 to-red-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 `,
  },
  {
    key: "art",
    title: "XYZ",
    tokens: "0",
    total: "1/08",
    mainBg: bg4,
    titleColor: "text-grey-800",
    btn1: `bg-gradient-to-r from-teal-600 to-teal-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 `,
    btn2: `bg-gradient-to-r from-purple-600 to-red-500 `,
    btn2Hover: `hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 `,
  },
];

const filterLinks = [
  { title: "All Categories", url: "all" },
  { title: "Art", url: "art" },
  { title: "Celebrities", url: "celebrities" },
  { title: "Gaming", url: "gaming" },
  { title: "Sport", url: "sport" },
  { title: "Music", url: "music" },
];

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  console.log(activeFilter);

  return (
    <div className="my-40 px-16 flex flex-col items-center ">
      {/* Filter Buttons */}
      <div>
      <h2 className="text-2xl font-bold mb-6">DISCOVER MORE</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {filterLinks.map((item) => (
            <button
              onClick={() => handleFilterClick(item.url)}
              key={item.url}
              className={`px-4 py-2 ${
                activeFilter === item.url
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-300 text-gray-900 hover:bg-gray-400"
              } rounded-3xl`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories
          .filter((category) =>
            activeFilter === "all" ? true : category.key === activeFilter
          )
          .map((category, index) => (
            <div
              key={index}
              className="shadow-2xl p-4 rounded-lg w-[300px] h-[400px] flex flex-col justify-between"
            >
              <div className=" h-[200px] rounded-lg relative mb-4">
                <Image
                  src={category.mainBg}
                  width={100}
                  height={100}
                  alt="mainBg"
                  className="w-full h-full"
                />
                <div className="absolute left-3 -bottom-5">
                  <div className="relative flex items-center mb-2 z-50">
                    <Image
                      src={img}
                      alt="Avatar"
                      width={100}
                      height={100}
                      className="rounded-full mr-1 w-9 h-9 border-2 border-white"
                    />
                    <Image
                      src={img}
                      alt="Avatar"
                      width={100}
                      height={100}
                      className="rounded-full w-9 h-9 border-2 border-white absolute left-5 -z-10"
                    />
                    <Image
                      src={img}
                      alt="Avatar"
                      width={100}
                      height={100}
                      className="rounded-full w-9 h-9 border-2 border-white absolute left-10 -z-20"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-bold ${category.titleColor}`}>
                  {category.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className={`${category.titleColor} text-sm font-medium`}>
                    {category.tokens}
                  </p>
                  <p className="text-gray-500 text-sm">{category.total}</p>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    className={`px-4 py-2 ${category.btn1} text-white rounded-3xl ${category.btn1Hover}`}
                  >
                    DIVID
                  </button>
                  <button
                    className={`px-4 py-2 ${category.btn2} text-white rounded-3xl ${category.btn2Hover}`}
                  >
                    DISWID
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
