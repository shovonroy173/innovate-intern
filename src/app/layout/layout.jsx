import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
        <div className="hidden md:flex md:space-x-4 lg:space-x-16">
            {navlinks.map((item)=>(
                <Link href={item.url} key={item.url} className='flex  items-center text-white hover:text-gray-400'>{item.name} <RiArrowDropDownLine /></Link>
            ))}
          
        </div>
        
        
        <Sheet>
  <SheetTrigger><div className='block md:hidden text-white text-2xl'>
        <FaBarsStaggered />
        </div></SheetTrigger>
  <SheetContent side="left">
  <div className="flex flex-col space-y-10">
            {navlinks.map((item)=>(
                <Link href={item.url} key={item.url} className='flex text-xl font-semibold items-center text-gray-700 hover:text-gray-400'>{item.name} </Link>
            ))}
          <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-1 w-full bg-gray-300 rounded-full outline-none px-2"
          />
          <button className="absolute top-0 right-0  px-2 py-1 h-full text-black rounded-full hover:bg-slate-500">
          <IoSearch />
          </button>
        </div>
        </div>
  </SheetContent>
</Sheet>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded-full outline-none px-2"
          />
          <button className="absolute top-0 right-0  px-2 py-1 h-full bg-white text-black rounded-full hover:bg-slate-500">
          <IoSearch />
          </button>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout