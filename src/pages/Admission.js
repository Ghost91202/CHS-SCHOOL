import React, { useState } from 'react';
import Navbar from './navbar';
import Admissionimg from '../assets/Admission1.jfif';
import assimg from "../assets/ass.jpeg"
import { IoIosArrowRoundForward } from 'react-icons/io';
import Footer from "../pages/footer"
import asseimg from "../assets/pngtree-teachers-day-school-supplies-cartoon-png-image_9133082.png"
import { useNavigate } from 'react-router-dom';

const Admission = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        navigate('/Admissionpolicies'); // Fix the quotes around the path
    }

    const textStyle = isHovered ? { color: 'white' } : {};

    return (
        <div className='relative'>
            <Navbar />

            <div className='flex flex-col md:flex-row min-h-screen bg-slate-100 pb-10'>
                <div className='flex flex-col col-span-2 md:pt-5 md:pb-20 md:pl-10 pr-4 md:pr-52 w-full'>
                    <div className='flex flex-col w-full md:flex-row gap-5 md:mt-20 md:ml-20 md:mr-10'>
                        <div className='relative h-80 md:h-auto overflow-hidden w-full md:w-1/2 rounded-2xl mb-4 md:mb-0'>
                            <div className='relative h-full rounded-lg overflow-y-hidden border-2 border-dashed-2 border-white w-full'>
                                <img src={Admissionimg} alt="" className='absolute inset-0 w-auto h-auto filter blur-sm object-cover' />
                                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                    <h1 className='text-white text-3xl border-2 border-dashed-2 border-white p-2 font-bold'>CHS EDUCATION CENTER</h1>
                                    <p className='text-white text-2xl'>Admission Info..</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col w-full md:w-1/2 gap-4'>
                            <div className='flex flex-col h-auto p-4 rounded-2xl bg-white'>
                                <h1 className='text-2xl md:text-xl lg:text-xl sm:text-lg font-bold mt-5'>Academic Session</h1>
                                <p className='text-lg md:text-base lg:text-md mt-2 mb-4'>The school session commences in April and finishes in March next year in the following schedule:</p>
                            </div>
                            <div className='flex flex-col p-4 rounded-2xl bg-white'>
                                <h1 className='text-2xl md:text-xl lg:text-xl sm:text-lg w-60 font-bold mt-5'>Co-scholastic Area</h1>
                                <div className='flex md:text-lg lg:text-md sm:text-lg gap-2'>
                                    <div>
                                        <li>Life Skills</li>
                                        <li>Attitudes & Values</li>
                                        <li>Activities</li>
                                        <li>Health & Physical Education</li>
                                        <li>Yoga.</li>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:h-1/2 md:flex-row gap-5 md:mt-4 md:ml-20 md:mr-10 ">
                        <div className='flex flex-col w-full md:w-1/4 rounded-2xl p-4 bg-white'>
                            <h1 className='text-2xl md:text-xl lg:text-xl font-bold'>Registration & Admission</h1>
                            <p className='text-lg md:text-base lg:text-lg mt-5'>Prospectus along with the registration form is available in the school office.</p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/4 p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl md:text-xl lg:text-xl font-bold'>Criteria of Admission</h1>
                            <p className='text-lg md:text-base lg:text-lg mt-5'>Prospectus along with the registration form is available in the school office.</p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/4 p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl md:text-xl lg:text-xl font-bold'>Admission Test</h1>
                            <p className='text-lg md:text-base lg:text-lg mt-5'>Prospectus along with the registration form is available in the school office.</p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/4 p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl md:text-xl lg:text-xl font-bold'>Enclosures</h1>
                            <p className='text-lg md:text-base lg:text-lg mt-5'>Prospectus along with the registration form is available in the school office.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-slate-100 flex pb-10 flex-col h-auto justify-center items-center'>
                <div className='flex bg-white flex-col md:flex-row col-span-2 md:row-span-2 w-full md:w-3/4'>
                    <div className='flex flex-col gap-4 w-full md:w-1/2 p-10'>
                        <h1 className='md:text-3xl lg:text-3xl sm:text-2xl  '>Admission criteria & process</h1>
                        <div className='md:text-lg flex flex-col gap-4 '>
                            <p>
                                As a first step, parents are welcome to visit their preferred CIS campus. This can be done by submitting the “Apply Now” form to arrange a convenient date and time. Those parents who are unable to fill in the visit to campuses form can call the Admissions Office and book an appointment over the phone.
                            </p>
                            <p>Either during the campus visit or at a later date, prospective pupils take an assessment; the type of assessment varies by age.
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col sm:ml-12 gap-4 md:p-10'>
                        <h1 className='md:text-3xl lg:text-3xl sm:text-2xl  text'>Contact information</h1>
                        <p className='md:text-xl font-bold'>Our phones are attended from Monday to Friday between 9.00am and 6.00pm.</p>
                        <p className='md:text-lg font-bold flex flex-col text-gray-600'>
                            <span>E-mail: chs.edu2015@gmail.com</span>
                            <span>Phone: +91 9580874461</span>
                        </p>
                    </div>
                </div>
                <div className='flex bg-white text-red-600 flex-col md:flex-row hover:bg-red-600 col-span-2 md:row-span-2 w-full md:w-3/4 h-20 justify-center items-center cursor-pointer'>
                    <h1 className='text-2xl font-semibold flex'> Admission policy
                        <IoIosArrowRoundForward className='text-4xl md:text-4xl mt-1 font-sans' />
                    </h1>
                </div>
            </div>

            <div className='w-full bg-slate-100 flex pb-10 flex-col h-auto justify-center items-center'>
                <div className='flex flex-col md:flex-row col-span-2 md:row-span-2 w-full md:w-3/4'>
                    <div className='flex flex-col gap-4 w-full md:w-3/4 p-10'>
                        <h1 className='md:text-5xl lg:text-3xl sm:text-3xl text-2xl mb-4'>Course fees by schools</h1>
                        <div className='flex gap-5 flex-col md:flex-row w-full md:gap-20'>
                            <div className='md:text-lg flex flex-col gap-4'>
                                <div className='md:text-2xl text-xl font-bold w-64 pb-10 border-b-2 border-transparent hover:border-red-600 hover:text-red-600'>
                                    <span className='border-b-2  border-red-600 pb-5'>CHS</span> Education Center
                                </div>
                                <div className='md:text-lg'>
                                    S-2 Tatya Topey Nagar, Kanpur 208022
                                </div>
                                <p className='md:text-lg flex flex-col'>
                                    <span className='text-red-600'>E-mail: chs.edu2015@gmail.com</span>
                                    <span>Phone: +91 9580874461</span>
                                </p>
                                <a href="/fees" className='ring-1 ring-red-600 flex items-center justify-center w-44 mt-8'>
                                    Tuition fees
                                </a>
                            </div>
                            <div className='md:text-lg flex flex-col gap-4'>
                                <div className='md:text-2xl text-xl font-bold w-64 pb-10 border-b-2 border-transparent hover:border-red-600 hover:text-red-600'>
                                    <span className='border-b-2 border-red-600 pb-5'>CHS</span> Education Center
                                </div>
                                <div className='md:text-lg'>
                                    S-A, Jainpur Housing Society
                                    UPSIDC
                                    Kanpur Dehat
                                </div>
                                <p className='md:text-lg flex flex-col'>
                                    <span className='text-red-600'>E-mail: chs.edu2015@gmail.com</span>
                                    <span className=' '>Phone: +91 9580874461</span>
                                </p>
                                <a href="/fees" className='ring-1 ring-red-600 flex items-center justify-center w-44 mt-8'>
                                    Tuition fees
                                </a>
                            </div>
                            <div className="flex relative flex-col p-10  gap-3 items-center justify-center opacity-70 md:w-72 md:h-72 left-90 border-8 border-green-600">
                                <div className="h-10 absolute bg-slate-100 w-20 sm:w-52 lg:w-32 lg:-mt-32 sm:-mt-60 -mt-44 md:w-20 md:-mt-72"></div>
                                <h1 className='md:text-3xl lg:text-3xl sm:text-2xl  font-semibold'>Build future with</h1>
                                <h1 className='md:text-6xl lg:text-4xl sm:text-3xl  text-white bg-green-600 p-4'>
                                    CHS
                                </h1>
                                <span className="md:text-3xl lg:text-3xl sm:text-2xl mix-blend-difference font-semibold">Education Center</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Admission;
