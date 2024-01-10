import React from 'react'
import FooterIMG from "../assets/back.webp"
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const footer = () => {
    return (
        <div className="relative mt-52 md:mt-32  flex flex-col justify-center h-screen md:h-3/4 w-screen">
           <div className='w-screen flex justify-center'>

            <h1 className='absolute  flex flex-col justify-center -top-32 md:-top-20 md:text-4xl text-2xl items-center'>
               
            TAKE THE NEXT STEPS
            <div className='w-20 border-2 mt-3 border-green-600'></div>
            <div className=' md:h-32 h-44  border-2 mt-3 border-grey-200  '></div>
            </h1>
           </div>

            <img src={FooterIMG} alt="chs school" className="w-screen md:h-1/2 h-screen object-cover mix-blend-darken" />
            {/* <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div> */}

           
            <div className='absolute w-screen h-screen md:h-3/4 justify-center md:pl-52  items-center bg-red-600  text-white   grid  sm:grid-flow-col sm:grid-cols-2  p-20'>
            <div className='absolute w-screen justify-center -top-10 md:font-bold  items-center  text-white  z-4'>
                <div className='  flex justify-center gap-3 md:gap-8'>
                    <a href='https://forms.gle/DLZcP9aD1wuDS5AX7' target='blank'>
                        <div class="md:w-32 md:h-32 w-20 h-20 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                            <p class="text-white text-sm justify-center flex md:text-xl">Register </p>
                        </div>
                    </a>
                    <a href=''>
                        <div class="md:w-32 md:h-32 w-20 h-20 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                            <p class="text-white text-sm justify-center flex md:text-xl">Visit Now</p>
                        </div>
                    </a>
                    <a href=''>
                        <div class="md:w-32 md:h-32 w-20 h-20 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                            <p class="text-white text-sm justify-center flex md:text-xl">Apply Now</p>
                        </div>
                    </a>
                    <a href=''>
                        <div class="md:w-32 md:h-32 w-20 h-20 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                            <p class="text-white text-sm justify-center flex md:text-xl">Give Now</p>
                        </div>
                    </a>
                </div>
            </div>
                <div className='flex  flex-col gap-3 pb-10 md:border-r-2 font-bold'>
                    <h1 className='md:text-4xl text-2xl mb-5'>
                        CHS Education centre

                    </h1>
                    <p className='text-lg md:text-xl gap-2 items-center flex '>
                        <FaLocationPin/>
                        S-2 Tatya Topey Nagar,
                        Kanpur
                        208022
                    </p>
                    <p className='flex gap-2 items-center text-lg md:text-xl font-sans'>
                        <FaPhoneAlt />
                        +91 9580874461
                    </p>
                    <p className='flex gap-2 items-center text-md md:text-xl font-sans'>
                        <IoIosMail className='md:text-3xl text-xl mt-1'/>
                        chs.edu2015@gmail.com
                    </p>
                </div>
                <div className='flex flex-col items-center font-bold'>

                    <div className=' flex gap-10'>
                        <div className="flex flex-col gap-2">
                            <a href="/">About</a>
                            <a href="/">Mission and values</a>
                            <a href="/Gallery">Gallery</a>
                            <a href="/">Contacts</a>
                        </div>




                        <div className="flex flex-col gap-2">
                            <a href="/Timing">SchoolTiming</a>
                            <a href="/">Administration</a>
                            <a href="/">Primary</a>
                            <a href="/">Secondary</a>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>

            <div className='relative w-screen grid grid-flow-col grid-cols-6 items-center mt-10  justify-center    text-white  z-3'>
                <div className=' h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center bg-red-700'>
                    <a href='https://www.facebook.com/CHSEducationCentreKanpurNagar' target='blank'>
                    <FaFacebookF />
                    </a>
                </div>
                <div className=' h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center bg-red-700'>
                    
                <a href='https://www.instagram.com/chseducentre/' target='blank'>
                    <FaInstagram />
                    </a>
                </div>
                <div className='bg-red-700  h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center '>
                   
                   <a href='https://www.youtube.com/@chsgroupofinstitutions5139' target='blank'>
                    <FaYoutube />
                    </a>
                </div>
                <div className='bg-red-700  h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center'>
                  <a href=''>
                    <FaTwitter />
                    </a>
                </div>
                <div className='bg-red-700  h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center'>
                   <a href=''>
                    <FaLinkedinIn />
                    </a>
                </div>
                <div className='bg-red-700  h-20 items-center flex border-r-2 text-3xl hover:bg-red-600 justify-center'>
                   <a href>
                    <FaPinterestP />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default footer