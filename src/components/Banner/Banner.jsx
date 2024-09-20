import React from 'react'

const Banner = () => {
  return (
    <div>
        {/* Main Section */}
      <main className="">
        {/* Colored Boxes */}
        <div className="flex justify-center space-x-4">
          <div className="h-[300px] w-[300px] bg-red-500"></div>
          <div className="h-[260px] w-[260px] bg-blue-500"></div>
          <div className="h-[300px] w-[300px] bg-pink-500"></div>
          <div className="h-[260px] w-[260px] bg-green-300"></div>
        </div>

        {/* Photo Section */}
      <section className="py-12  text-black flex justify-between items-center px-8">
        {/* Photo Blocks */}
        <div className=" flex justify-center items-center  space-x-20">
          <div className='flex flex-col  items-end space-y-6'>
          <div className="relative w-52 h-52 bg-purple-500 rounded-lg">
            <p className="absolute bottom-2 left-2 text-white">Photo 1</p>
            <img
              src="https://via.placeholder.com/40"
              alt="user avatar"
              className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full"
            />
          </div>
          <div className="relative w-36 h-36 bg-red-500 rounded-lg">
            <p className="absolute bottom-2 left-2 text-white">Photo 3</p>
            <img
              src="https://via.placeholder.com/40"
              alt="user avatar"
              className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full"
            />
          </div>
          </div>
          
          <div className="relative w-44 h-44 bg-gray-300 rounded-lg">
            <p className="absolute bottom-2 left-2 text-white">Photo 2</p>
            <img
              src="https://via.placeholder.com/40"
              alt="user avatar"
              className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full"
            />
          </div>
          
        </div>

        {/* Text Section */}
        <div className="max-w-md flex flex-col items-center space-y-7">
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