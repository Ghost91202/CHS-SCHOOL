import React from 'react';
import Frontvideo from '../assets/chsintro.mp4';
import logo from "../assets/logo2.png"
import "./home.css"
const Home = () => {
    return (
        <div className='relative'>
            <div className='overflow-hidden  w-full h-screen absolute inset-0'>
                <video autoPlay loop muted className='w-full h-screen object-cover'>
                    <source src={Frontvideo} type="video/mp4" className='h-screen w-screen md:w-full' />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='flex relative z-10 w-screen h-screen text-white text-center'>
                <div className='bg-black flex items-center col-span-3 flex-col w-screen h-screen bg-opacity-60 p-8 rounded-md'>
                    <div className='flex items-center justify-center flex-col gap-4 md:mt-32 md:mt-44 ld:mt-44 mt-44'>
                        <img src={logo} alt="" className='flex md:w-96 items-center ld:w-52 w-60' />
                        <div className='flex flex-col gap-4 items-center'>

                            <div className="animated-title w-full   sm:mt-20 mt-20 gap-10 text-white ">
                                <div className="text-top flex justify-center items-center">
                                    <div>
                                        <span className='md:text-6xl text-4xl md:ml-8 ld:ml-8 '>CHS Education Center</span>

                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-center text-bottom">

                                    <div className='flex w-full gap-5 items-center justify-center '>
                                        <div className='flex mt-20 w-full gap-9'>
                                            <p className='w-96 text-lg text-right text-white'>School Name - CHS Education centre
                                                S-2 Tatya Topey Nagar,
                                                Kanpur
                                                208022 </p>
                                            <p className='w-96 text-lg text-left text-white'>School Name - CHS Education centre
                                                S-A, Jainpur Housing Society
                                                UPSIDC
                                                Kanpur Dehat </p>

                                            <div>

                                            </div>

                                        </div>
                                        <div className='flex '>
                                            <nav className='nav cursor-pointer'>
                                                <ul>
                                                    <a href="/Chs"> <li>
                                                        kanpur
                                                        <span></span><span></span><span></span><span></span>
                                                    </li>
                                                    </a>
                                                </ul>
                                            </nav>
                                            <nav className='nav cursor-pointer'>
                                                <ul>
                                                    <a href="/Chs-Kanpur-Dehat" > <li>
                                                        kanpur-Dehat
                                                        <span></span><span></span><span></span><span></span>

                                                    </li>
                                                    </a>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
