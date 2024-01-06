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
        <div className='mt-4 text-md flex gap-12 hidden md:flex'>
          <a href="/About">About US</a>
          <a href="/">Admission</a>
          <a href="/mb">Administration</a>
          <a href="/fees">Tuition fees</a>
          <a href="/">Contact</a>
        </div>
        <div className='flex mr-4 gap-3 mt-2'>
          <a href="/register" className='bg-red-600 h-10 p-2 text-white font-semibold'>Apply Now</a>
          <a href="" className='p-2 underline-offset-2 hover:underline hover:text-red-600'> ENG</a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-center gap-3 bg-stone-100 p-2">
          <a href="/About">About</a>
          <a href="/">Admission</a>
          <a href="/fees">Tuition fees</a>
          <a href="/mb">Administration</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
