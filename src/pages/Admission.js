import React from 'react';
import Navbar from './navbar';
import Admissionimg from '../assets/premium_photo-1687201986600-3303920c99b5.avif';
import assimg from "../assets/ass.jpeg"
import asseimg from "../assets/pngtree-teachers-day-school-supplies-cartoon-png-image_9133082.png"
const Admission = () => {
    return (
        <div className='relative bg-stone-200'>
            <Navbar />

            <div className='flex h-screen  pb-10'>
                <div className='flex flex-col col-span-2   md:pt-5 md:pb-20 md:pl-10 pr-52 h-screen w-screen'>
                    <div className='flex flex-col  w-full md:h-1/2 md:flex-row  gap-5 md:mt-20 md:ml-20 md:mr-10 '>
                        <div className='bg-black relative h-80 overflow-hidden w-full rounded-2xl'>
                            <div className='relative h-full border-2 border-dashed-2 border-white w-full'>
                                <img src={Admissionimg} alt="" className='absolute inset-0 h-full w-full filter blur-sm' />
                                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                    <h1 className='text-red-600 text-2xl border-2 border-dashed-2 border-white p-2 font-bold'>CHS EDUCATION CENTER</h1>
                                    <p className='text-white text-xl'>Admission Info..</p>
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
                                <img src={asseimg} alt="" className="relative mix-blend-darken  w-52 ml-20 -mt-10    -z-1   "/>

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
            <img src={assimg} alt="" className="relative mix-blend-darken  w-44 ml-72 -mt-32 -rotate-90 "/>

        </div>
    );
};

export default Admission;
