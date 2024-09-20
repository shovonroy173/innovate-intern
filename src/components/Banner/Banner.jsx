import React from 'react'
import img from "@/assets/profile.jpg";
import Image from 'next/image';
import bg from "@/assets/ban-sub-img.png"
const Banner = () => {
  return (
    <div>
        {/* Main Section */}
      <main className="px-16">
        {/* Colored Boxes */}
        <div className="flex justify-center ">
        <div className='banner-custom-border-radius -z-10'></div>
        <div className="flex justify-center space-x-4  mt-20">
          <div className="transition-all  h-[100px] w-[100px] md:transition-all md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] bg-red-500"></div>
          <div className="transition-all  h-[60px] w-[60px] md:transition-all md:h-[100px] md:w-[100px] lg:h-[260px] lg:w-[260px]   bg-blue-500"></div>
          <div className="transition-all  h-[100px] w-[100px] md:transition-all md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] bg-pink-500"></div>
          <div className="ransition-all  h-[60px] w-[60px] md:transition-all md:h-[100px] md:w-[100px] lg:h-[260px] lg:w-[260px] bg-green-300"></div>
          </div>
        </div>

        {/* Photo Section */}
      <section className="text-black flex flex-col md:flex-row space-y-10 md:justify-between items-center gap-x-20  my-32">
        {/* Photo Blocks */}
        <div className=" flex justify-center items-center space-x-10  md:space-x-20">
          <div className='flex flex-col  items-end space-y-10'>
          <div className="relative w-32 h-32 md:transition-all md:w-52 md:h-52 bg-purple-500 rounded-lg">
            <p className="absolute top-10 md:top-20 left-4 text-white text-md md:text-xl">Photo 1</p>
            <Image src={img} width={100} height={100} alt='user' className="absolute -bottom-5 -right-5 w-12 h-12 md:transition-all md:w-16 md:h-16 rounded-full border-4 border-white" /> 

          </div>
          <div className="relative w-20 h-20 md:transition-all   md:w-36 md:h-36 bg-red-500 rounded-lg">
            <p className="absolute top-8  md:top-12 left-4 text-white text-md md:text-xl">Photo 3</p>
            <Image src={img} width={100} height={100} alt='user' className="absolute -bottom-4 -right-4 w-10 h-10 md:transition-all md:w-12 md:h-12 rounded-full border-4 border-white" />
          </div>
          </div>
          
          <div className='relative w-26 h-26 md:transition-all  md:w-44 md:h-44 '>
            <Image  src={bg} width={100} height={100} alt='bg' className=" w-26 h-26 md:transition-all  md:w-44 md:h-44  rounded-lg"/>
            <p className="absolute top-10 md:top-20 left-4 text-black text-md md:text-xl">Photo 2</p>
            <Image src={img} width={100} height={100} alt='user' className="absolute -bottom-4 -right-4 w-10 h-10 md:transition-all md:w-12 md:h-12 rounded-full border-4 border-white" />
          </div>
          
        </div>

        {/* Text Section */}
        <div className="w-full md:max-w-md flex flex-col items-center space-y-7">
          <p className="text-gray-900 text-xl font-semibold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="w-[200px] px-6 py-2 border-2 border-purple-800 text-purple-800 font-bold rounded-lg hover:bg-purple-800 hover:text-white transition">
          Sign Up
        </button>
        </div>
      </section>
      </main>

      
    </div>
  )
}

export default Banner