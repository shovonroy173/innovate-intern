"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import bg from "@/assets/slider.png";

const Slider = () => {
  const sliderContent = [
    {
      title: "Overview",
      desc: `kdfj sd n sn ncsk ncsd ns nd  fsdfns nfjsdnfsdfsdn d do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa`,
    },
    {
      title: "About",
      desc: `sdfsdff oijf sdjf sdnfshf sjd jskdnfksjdnjksdn jsdnkjdnk ef efse fsdf do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa`,
    },
    {
      title: "Feature",
      desc: ` kjnjj  o oij oiajd  j oij oij jio josj iaj a jioj oikj okisaj kj k  do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa`,
    },
    {
      title: "Products",
      desc: `difhsi jijsjs jnhejsa  oij ij  oij oi j oi oi oiwj oij  ioj  oj oij o
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa`,
    },
  ];

  return (
    <div className=" relative  my-60 ">
      <div className="absolute -top-32 md:-top-48 right-0 flex space-x-8 z-10">
        <div className="w-[120px] h-[200px] md:transition-all md:w-[220px] md:h-[340px] lg:w-[320px] lg:h-[420px]  bg-red-300 "></div>
        <div className="w-[100px] h-[180px] md:transition-all md:w-[120px] md:h-[260px] lg:w-[220px] lg:h-[300px]  bg-purple-300 "></div>
        <div className="w-[100px] h-[180px] md:transition-all md:w-[120px] md:h-[260px] lg:w-[220px] lg:h-[300px]   bg-teal-300 "></div>
      </div>
      <div className="flex flex-col  relative overflow-x-hidden">
        <div className="h-[300px] md:h-[580px] flex justify-center md:justify-start items-center custom-border-radius">
          <div className="max-w-sm md:max-w-2xl lg:max-w-7xl px-16">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              //   className="max-w-6xl"
            >
              <CarouselContent>
                {sliderContent.map((item) => (
                  <CarouselItem key={item.title}>
                    <div className="w-full md:w-[400px] ">
                      <p className="text-3xl font-bold">{item.title}</p>
                      <p className="text-md font-medium text-wrap">{item.desc}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-x-24 justify-center md:justify-between z-10 px-16">
          <div className="flex space-x-2 md:space-x-4">
            <div className="grid grid-cols-1 w-[200px] md:w-[400px] gap-3">
              <div className="w-[200px] h-[300px] md:transition-all md:w-[400px] md:h-[400px] bg-green-500 rounded-3xl"></div>

              <div className="flex justify-evenly md:justify-between ">
                {" "}
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-neutral-700 rounded-xl md:rounded-3xl "></div>
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-cyan-400 rounded-xl md:rounded-3xl"></div>
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-fuchsia-600 rounded-xl md:rounded-3xl"></div>{" "}
              </div>
            </div>
            <div className="grid grid-cols-1 w-[40px] ">
              <div className="flex flex-col justify-between">
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-green-500 rounded-xl md:rounded-3xl border-8 border-black"></div>
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-purple-400 rounded-xl md:rounded-3xl"></div>
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-rose-300 rounded-xl md:rounded-3xl"></div>
                <div className="w-[60px] h-[60px] md:transition-all md:w-[120px] md:h-[120px]  bg-red-600 rounded-xl md:rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[500px]">
            <p className="text-3xl font-bold">Collection Featured</p>
            <p className="text-md font-medium">
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
              eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
              esse cillumsunt in culpa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
