import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Layout = ({children}) => {
    const navlinks = [
        {name: 'Home', url: '/'},
        {name: 'Event', url: '/event'},
        {name: 'Contact', url: '/contact'},
        {name: 'Blog', url: '/blog'},

    ]
  return (
    <div className="min-h-screen ">
        <nav className="flex justify-between items-center bg-neutral-700 px-16 py-4 border-b-2 border-neutral-900">
        <div className="flex space-x-4">
            {navlinks.map((item)=>(
                <Link href={item.url} key={item.url} className='flex  items-center text-white hover:text-gray-400'>{item.name} <RiArrowDropDownLine /></Link>
            ))}
          
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded-full outline-none px-2"
          />
          <button className="absolute right-0 top-1 px-2 py-1 bg-white text-black rounded-full">
          <IoSearch />
          </button>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout