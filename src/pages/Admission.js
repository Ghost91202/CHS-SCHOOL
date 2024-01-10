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
        <div className='relative '>
            <Navbar />

            <div className='flex h-screen bg-slate-100 pb-10'>
                <div className='flex flex-col col-span-2   md:pt-5 md:pb-20 md:pl-10 pr-52 h-screen w-screen'>
                    <div className='flex flex-col  w-full md:h-1/2 md:flex-row  gap-5 md:mt-20 md:ml-20 md:mr-10 '>
                        <div className=' relative h-80 overflow-hidden w-full rounded-2xl'>
                            <div className='relative h-full border-2 border-dashed-2 border-white w-full'>
                                <img src={Admissionimg} alt="" className='absolute inset-0 h-full w-full filter blur-sm' />
                                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                    <h1 className='text-white text-3xl border-2 border-dashed-2 border-white p-2 font-bold'>CHS EDUCATION CENTER</h1>
                                    <p className='text-white text-2xl'>Admission Info..</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex  gap-4 '>
                            <div className='flex flex-col p-4 rounded-2xl bg-white'>
                                <h1 className='text-2xl font-bold mt-5'>Academic Session</h1>
                                <h1 className='text-lg mr-3 mt-2 mb-4'>The school session commences in April and finishes in March next year in the following schedule:</h1>
                                <div className='ml-2 text-md'>
                                    <li>1st Semester:-1st April to 30th September.( Periodic Test 1 + Half Yearly Exam )</li>
                                    {/* <li>2nd Semester:-1st October to 31st March. ( Periodic Test 2 + Final Exam )</li> */}
                                </div> </div>
                            <div className='flex flex-col  p-4 rounded-2xl bg-white'>
                                <h1 className='text-2xl w-60  font-bold mt-5'>Co-scholastic Area</h1>
                                <div className='flex gap-2  '>
                                    <div>
                                        <li>Life Skills</li>
                                        <li>Attitudes & Values</li>
                                        <li>Activities</li>
                                        <li>Health & Physical Education</li>
                                        <li>Yoga.</li>
                                    </div>

                                </div>
                                <img src={asseimg} alt="" className="relative mix-blend-darken  w-52 ml-20 -mt-10    -z-1   " />

                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col  w-full md:h-1/2 md:flex-row  gap-5 md:mt-4 md:ml-20 md:mr-10 ">
                        <div className='flex flex-col rounded-2xl p-4 bg-white'>
                            <h1 className='text-2xl mr-20 font-bold'>Registration & Admission</h1>
                            <h1 className='text-lg mr-5 mt-5'>Prospectus along with registration form is available in the school office.</h1>
                        </div>
                        <div className='flex flex-col p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl mr-20 font-bold'>Criteria of Admission</h1>
                            <h1 className='text-lg mr-5 mt-5'>Prospectus along with registration form is available in the school office.</h1>
                        </div>
                        <div className='flex flex-col p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl mr-20 font-bold'>Admission Test</h1>
                            <h1 className='text-lg mr-5 mt-5'>Prospectus along with registration form is available in the school office.</h1>
                        </div>
                        <div className='flex flex-col p-4 rounded-2xl bg-white'>
                            <h1 className='text-2xl mr-20 font-bold'>Enclosures</h1>
                            <h1 className='text-lg mr-5 mt-5'>Prospectus along with registration form is available in the school office.</h1>
                        </div>

                    </div>

                </div>

            </div>
            <img src={assimg} alt="" className="relative mix-blend-darken  w-44 ml-72 -mt-32 -rotate-90 " />
            <div className='w-screen bg-slate-100 flex pb-10 flex-col h-auto  justify-center items-center'>
                <div className='flex bg-white flex-col md:flex-row col-span-2 md:row-span-2 w-3/4'>
                    <div className='flex flex-col gap-4 w-1/2  p-10'>
                        <h1 className='md:text-5xl'>Admission criteria & process</h1>
                        <div className='md:text-lg flex flex-col gap-4 '>

                            <p >
                                As a first step, parents are welcome to visit their preferred CIS campus. This can be done by submitting the “Apply Now” form to arrange a convenient date and time. Those parents who are unable to fill in the visit to campuses form can call the Admissions Office and book an appointment over the phone.</p>
                            <p>Either during the campus visit or at a later date, prospective pupils take an assessment; the type of assessment varies by age.
                            </p>
                        </div>
                    </div>
                    <div className=' w-1/2 flex flex-col gap-4 md:p-10'>
                        <h1 className='md:text-5xl'>Contact information</h1>
                        <p className='md:text-xl font-bold'>Our phones are attended from Monday to Friday between 9.00am and 6.00pm.</p>
                        <p className='md:text-lg font-bold flex flex-col text-gray-600'>
                            <span>E-mail: chs.edu2015@gmail.com</span>
                            <span>Phone: +91 9580874461</span>
                        </p>
                    </div>

                </div>
                <div className='flex bg-white text-red-600 flex-col md:flex-row hover:bg-red-600 col-span-2 md:row-span-2 h-20 w-3/4 justify-center items-center cursor-pointer' onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={handleClick}>
                    <h1 style={textStyle} className='text-2xl font-semibold flex'> Admission policy
                        <IoIosArrowRoundForward className='text-4xl md:text-4xl mt-1 font-sans' style={textStyle} />
                    </h1>
                </div>
            </div>
            <div className='w-screen bg-slate-100 flex pb-10 flex-col h-auto  justify-center items-center'>
                <div className='flex  flex-col md:flex-row col-span-2 md:row-span-2 w-3/4'>
                    <div className='flex flex-col gap-4 w-3/4  p-10'>
                        <h1 className='md:text-5xl mb-4'>Course fees by schools</h1>
                        <div className='flex flew-row w-screen   md:gap-20'>

                            <div className='md:text-lg flex flex-col gap-4 '>
                                <div className='md:text-2xl font-bold w-64 pb-10  border-b-2 border-transparent hover:border-red-600 hover:text-red-600'>
                                    <span className='border-b-2 border-red-600 pb-5'>CHS</span> Education Center

                                </div>
                                <div className='md:text-lg '>
                                    S-2 Tatya Topey Nagar, Kanpur 208022
                                </div>
                                <p className='md:text-lg  flex flex-col'>
                                    <span className='text-red-600'>E-mail: chs.edu2015@gmail.com</span>
                                    <span>Phone: +91 9580874461</span>
                                </p>
                                <a href="/fees" className='ring-1 ring-red-600 flex items-center justify-center w-44 mt-8'>
                                    Tuition fees
                                </a>
                            </div>
                            <div className='md:text-lg flex flex-col gap-4 '>
                                <div className='md:text-2xl font-bold w-64 pb-10  border-b-2 border-transparent hover:border-red-600 hover:text-red-600'>
                                    <span className='border-b-2 border-red-600 pb-5'>CHS</span> Education Center

                                </div>
                                <div className='md:text-lg '>
                                    S-A, Jainpur Housing Society
                                    UPSIDC
                                    Kanpur Dehat
                                </div>
                                <p className='md:text-lg  flex flex-col'>
                                    <span className='text-red-600'>E-mail: chs.edu2015@gmail.com</span>
                                    <span className=' '>Phone: +91 9580874461</span>
                                </p>
                                <a href="/fees" className='ring-1 ring-red-600 flex items-center justify-center w-44 mt-8'>
                                    Tuition fees
                                </a>


                            </div>
                            <div className="flex relative flex-col items-center justify-center   opacity-70 w-72 h-72  left-90 border-8 border-green-600 ">
                                <div className="h-10 absolute bg-slate-100 w-20 -mt-72">
                                    </div> 
                            <h1  className='md:text-3xl font-semibold'>Build future with</h1>
                                <h1 className='md:text-6xl text-white bg-green-600 p-4 '>
                                 CHS
                                
                                </h1>
                                <span className="text-3xl  mix-blend-difference font-semibold" >Education Center</span>
                               
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
