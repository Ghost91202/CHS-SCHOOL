import React from 'react'
import FooterIMG from "../assets/back.webp"
import "./Footer.css"
const footer = () => {
    return (
        <div className="relative flex h-auto md:h-screen w-screen">
            <img src={FooterIMG} alt="chs school" className="w-screen md:h-3/4 h-96 object-cover" />
            <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div>

            <div className='absolute w-screen justify-center mt-10 items-center   text-white  z-3'>
               <div className='  flex justify-center gap-8'>
               <a href=''>
                    <div class="w-32 h-32 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                        <p class="text-white">Register Now</p>
                    </div>
                </a>
                <a href=''>
                    <div class="w-32 h-32 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                        <p class="text-white">Visit Now</p>
                    </div>
                </a>
                <a href=''>
                    <div class="w-32 h-32 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                        <p class="text-white">Apply Now</p>
                    </div>
                </a>
                <a href=''>
                    <div class="w-32 h-32 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center">
                        <p class="text-white">Give Now</p>
                    </div>
                </a>
               </div>
                <p className='md:text-2xl text-xl font-bold  tracking-wide'>If you would like to book a School Tour please contact us.</p>
            </div>
            <div
                className="w-screen absolute md:p-40 p-10 md:mt-40 top-40 "

            >
                <div className="bg-white flex justify-center items-center cursor-pointer w-full mt-32 md:mt-0 md:w-full hover:bg-red-600 h-20 md:h-32"

                >
                    <h1 className="text-red-700 flex   text-3xl mt-1" >
                        Book A Tour Now
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default footer