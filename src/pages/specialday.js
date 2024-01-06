import React from 'react'
import Navbar from "./navbar"
import { FaHome } from "react-icons/fa";
import calenderimg from "../assets/calenderimg.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";

const specialday = () => {
    return (
        <div className='relative'>
            <Navbar />

            <div className='flex '>
                <div className='mt-32'>
                    <div className='flex flex-col md:ml-32 ml-10 gap-5'>
                        <div className='flex gap-1'>
                            <FaHome className='m-1' />
                            <span>|</span>
                            <div>Academic</div>
                        </div>
                        <h1 className='text-7xl '>Calender </h1>
                    </div>

                    <div className='flex relative mt-20'>
                        <img src={calenderimg} alt="chs school" className=" max-h-auto md:w-screen h-96 md:h-screen object-cover" />
                        <div className="absolute inset-0 h-auto bg-black opacity-60"></div>

                        <div className='absolute text-white  flex md:flex-row flex-col md:gap-20 md:p-20 '>
                            <div>
                                <h1 className='md:text-6xl border-2 shadow-2xl shadow-green-900 drop-shadow-2xl border-gray-300 p-5'>
                                    Special Assemblies
                                </h1>
                            </div>
                            <div className='flex md:ml-20 ml-5 mt-5 md:gap-10   h-screen  flex-col'>
                                <h1 className='md:text-5xl text-5xl w-72 underline'>Month Name</h1>
                                <p >
                                    <ol className='flex flex-col gap-4 text-xl w-96 md:w-full text-justify mt-4 md:mt-8'>
                                        <li className='flex'>April  <IoIosArrowRoundForward className='text-3xl' /></li>
                                        <li className='flex'>May  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>May  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>August  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>August  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>August  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>September  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>September  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>October  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>November  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>December  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>January  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                        <li className='flex'>February  <IoIosArrowRoundForward className='text-3xl' /> </li>
                                    </ol>
                                </p>

                            </div>
                            <div className='flex md:ml-20 hidden md:flex md:mt-7 gap-10  h-screen   flex-col'>
                                <h1 className='md:text-5xl   underline'>Topic</h1>
                                <p >
                                    <ul className='flex flex-col gap-4 text-xl w-96 md:w-full text-justify mt-4 md:mt-8'>
                                        <li>Earth Day</li>
                                        <li>Labour Day</li>
                                        <li>Mother's Day</li>
                                        <li>Raksha Bandhan</li>
                                        <li>Janmashtami</li>
                                        <li>Independence Day</li>
                                        <li>Hindi Diwas</li>
                                        <li>Teacher's Day</li>
                                        <li>Diwali</li>
                                        <li>Children's Day</li>
                                        <li>Christmas</li>
                                        <li>Republic Day</li>
                                        <li>Basant Panchami</li>
                                    </ul>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default specialday
