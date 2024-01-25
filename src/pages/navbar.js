import React from 'react';
import Drawer from "./Drawer";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
const Navbar = () => {


  return (

    <div>

      <div className='flex md:fixed sticky z-50 w-screen justify-between h-16 bg-gray-100'>
        <Drawer className="flex z-50 bg-white" />
        <div>
          <Link to="/chs">
            <img src={Logo} alt="chs school" className='h-14 mt-1' />
          </Link>
        </div>
        <div className='mt-4 text-md  gap-12 hidden justify-center md:flex'>
           <Link to="/About" className='w-auto'>About</Link>
          <Link to="/chs/Admission" className='w-auto'>Admission</Link>
          <Link to="/fees" className='w-auto'>Fees</Link>
          <Link to="/Administrator" className='w-auto'>Administration</Link>
          <Link to="/contact" className='w-auto'>Contact</Link>


        </div>
        <div className='flex mr-4 justify-center gap-3 mt-2'>
          <Link to="/login" className='bg-red-600 md:h-10 md:p-2 h-8 p-1  text-white font-semibold'>Log in</Link>
          <Link to="/register" className='bg-red-600 md:h-10 md:p-2 h-8 p-1  text-white font-semibold'>Apply Now</Link>
          {/* <a href="" className='md:p-2 p-1 underline-offset-2 hover:underline hover:text-red-600'> ENG</a> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-center gap-3 w-auto pl-20 pr-10 overflow-x-scroll bg-stone-100 ">
          <Link to="/About" className='w-auto'>About</Link>
          <Link to="/Admission" className='w-auto'>Admission</Link>
          <Link to="/fees" className='w-auto'>Fees</Link>
          <Link to="/mb" className='w-auto'>Administration</Link>
          <Link to="/contact" className='w-auto'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
