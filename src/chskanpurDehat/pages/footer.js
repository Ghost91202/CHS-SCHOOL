import React from 'react'
import logo from "../../assets/logo.png"
const footer = () => {
    return (
        <div className='w-screen ml-14 h-auto pb-20  '>
            <div className='flex justify-between'>
                <div className='grid gird-flow-cols md:grid-cols-3 md:p-10'>
                    <div className='grid grid-flow-row grid-rows-2 '>
                        <div className='md:p-10 mt-20 md:mt-0'>
                            <h1 className='text-2xl font-bold w-44 border-b-2 pb-5 border-red-600'>CHS</h1>
                        </div>
                        <div className='grid  grid-flow-row grid-rows-6 gap-2 md:-mt-5 -mt-3 md:w-full w-screen  md:ml-10'>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>About us </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Mission & Vision </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Teachers </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Licenses</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Quality and service </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Contacts </a>
                        </div>
                    </div>
                    <div className='grid grid-flow-row grid-rows-2 '>
                        <div className='md:p-10 md:mt-0 mt-10'>
                            <h1 className='text-2xl font-bold w-44  border-b-2 md:pb-5 border-red-600'>Programs</h1>
                        </div>
                        <div className='grid  grid-flow-row grid-rows-6 gap-2 md:-mt-5 -mt-10 md:w-full w-screen  md:ml-10'>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>What makes us unique?
                            </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Kindergarten</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Primary School
                            </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>high school</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Extracurricular activities</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Contacts </a>
                        </div>
                    </div>
                    <div className='grid grid-flow-row grid-rows-2 '>
                        <div className='p-10 -ml-10 md:-ml-0'>
                            <h1 className='text-2xl font-bold w-44 border-b-2 md:pb-5 border-red-600'>Admission</h1>
                        </div>
                        <div className='grid  grid-flow-row grid-rows-6 gap-2 md:-mt-5 -mt-10 md:w-full w-screen  md:ml-10'>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Admission Process</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Cost of education </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>School Admission </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Apply now</a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>CHS World </a>
                            <a href="/" className='w-full hover:text-red-600 hover:underline'>Working at CHS </a>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-10 w-96 h-auto'>
                    <div className=' bg-white rounded-3xl z-10  w-96 h-44'>

                        <img src={logo} alt="" className='flex  h-24 mt-10 ml-20' />
                    </div>
                    <div className='h-10 w-screen'>
                    <h1 className='text-3xl text-green-600  '>phone no.</h1>
                        <h1 className='w-full hover:text-red-600 hover:underline cursor-pointer font-serif text-lg mt-2'>+91 9580874461</h1>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-3xl text-green-600  '>Address</h1>
                        <h1 className='w-72 mt-2 text-lg font-medium'>
                        CHS EDUCATION CENTRE S-A HOUSING UPSIDC JAINPUR,KANPUR DEHAT 209311
                        </h1>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default footer
