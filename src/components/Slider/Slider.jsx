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
      <div className="absolute -top-40 right-0 flex space-x-8 z-10">
        <div className="w-[320px] h-[420px]  bg-red-300 "></div>
        <div className="w-[220px] h-[300px]  bg-purple-300 "></div>
        <div className="w-[220px] h-[300px]  bg-teal-300 "></div>
      </div>
      <div className="flex flex-col relative overflow-x-hidden">
        <div className=" h-[580px] flex justify-start items-center custom-border-radius">
          <div className="max-w-6xl ">
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
                    <div className="w-[400px] ">
                      <p className="text-3xl font-bold">{item.title}</p>
                      <p className="text-md font-medium">{item.desc}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex items-center justify-between z-10">
          <div className="flex space-x-3">
            <div className="grid grid-cols-1 w-[400px] gap-3">
              <div className="w-[400px] h-[400px] bg-green-500 rounded-3xl"></div>

              <div className="flex justify-between">
                {" "}
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl "></div>
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl"></div>
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl"></div>{" "}
              </div>
            </div>
            <div className="grid grid-cols-1 w-40">
              <div className="flex flex-col justify-between">
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl border-8 border-black"></div>
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl"></div>
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl"></div>
                <div className="w-[120px] h-[120px]  bg-green-500 rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="w-[500px]">
            <p>Collection Featured</p>
            <p>
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
