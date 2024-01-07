import React from 'react';
import Drawer from "./Drawer";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className='flex md:fixed sticky z-50 w-screen justify-between h-16 bg-gray-100'>
        <Drawer className="flex z-50" />
        <div>
          <a href="/">
            <img src={Logo} alt="chs school" className='h-14 mt-1' />
          </a>
        </div>
        <div className='mt-4 text-md flex gap-12 hidden justify-center md:flex'>
          <a href="/About">About US</a>
          <a href="/chs/Admission">Admission</a>
          <a href="/mb">Administration</a>
          <a href="/fees">Tuition fees</a>
          <a href="/">Contact</a>
        </div>
        <div className='flex mr-4 justify-center gap-3 mt-2'>
          <a href="/register" className='bg-red-600 md:h-10 md:p-2 h-8 p-1  text-white font-semibold'>Apply Now</a>
          <a href="" className='md:p-2 p-1 underline-offset-2 hover:underline hover:text-red-600'> ENG</a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-center gap-3 w-auto pl-20 pr-10 overflow-x-scroll bg-stone-100 ">
          <a href="/About" className='w-auto  '>About</a>
          <a href="/" className='w-auto '>Admission</a>
          <a href="/fees" className='w-auto'>fees</a>
          <a href="/mb" className='w-auto '>Administration</a>
          <a href="/" className='w-auto '>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
