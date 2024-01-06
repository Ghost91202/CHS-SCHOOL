import React from 'react';
import Navbar from "../pages/navbar"
import Footer from "../pages/footer"
const FeeTable = () => {
    return (
        <div className='flex flex-col relative '>
            <Navbar />
            <div className="max-w-4xl flex flex-col mx-auto mb-10 md:mt-20">
                <div className='flex flex-col p-8 md:p-0 md:pb-10 justify-center border-b-2 border-red-300'>
                    <h2 className="text-2xl flex justify-center font-bold mb-4">Fee Structure (2024 – 2025)</h2>

                    <table className="min-w-full bg-white border rounded-lg  border-gray-300 shadow-lg">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-1 md:p-3">Class</th>
                                <th className="border border-gray-300 p-1 md:p-3">Exam & Term Fee</th>
                                <th className="border border-gray-300 p-1 md:p-3">Lab Fee</th>
                                <th className="border border-gray-300 p-1 md:p-3">Activity Fee</th>
                                <th className="border border-gray-300 p-1 md:p-3">Tuition Fee</th>
                                <th className="border border-gray-300 p-1 md:p-3">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-red-600 hover:text-white'>
                                <td className="border border-gray-300 p-1 md:p-3">Pre – Primary</td>
                                <td className="border border-gray-300 p-1 md:p-3">1000</td>
                                <td className="border border-gray-300 p-1 md:p-3">--</td>
                                <td className="border border-gray-300 p-1 md:p-3">300</td>
                                <td className="border border-gray-300 p-1 md:p-3">2800</td>
                                <td className="border border-gray-300 p-1 md:p-3">4100</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="border border-gray-300 p-1 md:p-3">I – V</td>
                                <td className="border border-gray-300 p-1 md:p-3">1100</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">4000</td>
                                <td className="border border-gray-300 p-1 md:p-3">6100</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="border border-gray-300 p-1 md:p-3">VI – VIII</td>
                                <td className="border border-gray-300 p-1 md:p-3">1200</td>
                                <td className="border border-gray-300 p-1 md:p-3">600</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">4500</td>
                                <td className="border border-gray-300 p-1 md:p-3">6800</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="border border-gray-300 p-1 md:p-3">IX – X</td>
                                <td className="border border-gray-300 p-1 md:p-3">1300</td>
                                <td className="border border-gray-300 p-1 md:p-3">1500</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">5500</td>
                                <td className="border border-gray-300 p-1 md:p-3">8800</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border border-gray-300 p-1 md:p-3 font-bold">Class XI & XII</td>
                                <td className="border border-gray-300 p-1 md:p-3">Exam & Term Fee</td>
                                <td className="border border-gray-300 p-1 md:p-3">Lab / Practical Fee</td>
                                <td className="border border-gray-300 p-1 md:p-3">Activity Fee</td>
                                <td className="border border-gray-300 p-1 md:p-3">Tuition Fee</td>
                                <td className="border border-gray-300 p-1 md:p-3">Total</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="border border-gray-300 p-1 md:p-3">Science</td>
                                <td className="border border-gray-300 p-1 md:p-3">1500</td>
                                <td className="border border-gray-300 p-1 md:p-3">1900</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">6000</td>
                                <td className="border border-gray-300 p-1 md:p-3">9900</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>
                                <td className="border border-gray-300 p-1 md:p-3">Commerce</td>
                                <td className="border border-gray-300 p-1 md:p-3">1500</td>
                                <td className="border border-gray-300 p-1 md:p-3">1000</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">6000</td>
                                <td className="border border-gray-300 p-1 md:p-3">9000</td>
                            </tr>
                            <tr className='hover:bg-gray-200'>

                                <td className="border border-gray-300 p-1 md:p-3">Humanities</td>
                                <td className="border border-gray-300 p-1 md:p-3">1500</td>
                                <td className="border border-gray-300 p-1 md:p-3">1000</td>
                                <td className="border border-gray-300 p-1 md:p-3">500</td>
                                <td className="border border-gray-300 p-1 md:p-3">6000</td>
                                <td className="border border-gray-300 p-1 md:p-3">9000</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-2 flex justify-center">Route Distance in KM Charges</h3>
                        <table className="min-w-full bg-white border border-gray-300 shadow-lg">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-1 md:p-3">Distance</th>
                                    <th className="border border-gray-300 p-1 md:p-3">Within 2 Km</th>
                                    <th className="border border-gray-300 p-1 md:p-3">2 Km – 5 Km</th>
                                    <th className="border border-gray-300 p-1 md:p-3">5 Km – 7 Km</th>
                                    <th className="border border-gray-300 p-1 md:p-3">7 Km – 10 Km</th>
                                    <th className="border border-gray-300 p-1 md:p-3">10 Km – 15 Km</th>
                                    <th className="border border-gray-300 p-1 md:p-3">15 Km – 25 Km</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-1 md:p-3">Charges</td>
                                    <td className="border border-gray-300 p-1 md:p-3">1100/-</td>
                                    <td className="border border-gray-300 p-1 md:p-3">1200</td>
                                    <td className="border border-gray-300 p-1 md:p-3">1300</td>
                                    <td className="border border-gray-300 p-1 md:p-3">1400</td>
                                    <td className="border border-gray-300 p-1 md:p-3">1900</td>
                                    <td className="border border-gray-300 p-1 md:p-3">2100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4">
                        <p>Additional Notes:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>3000 Rs Annual Fee to be paid Only With 1st Quarter</li>
                            <li>7500 Rs Admission Fee (only for new admission)</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute  md:text-8xl md:mt-96 md:top-80  md:-left-80 -rotate-90 opacity-5'>
                    CHS EDUCATION CENTER
                </div>
                <div className='flex p-8 md:p-0 justify-center'>
                    <div className="container flex flex-col justify-center mx-auto mt-8">
                        <h2 className="text-2xl flex justify-center text-red-600  font-bold mb-4">C. H. S GURUKULAM Mohanpuram, Meharban Singh Ka Purwa</h2>
                        <h2 className="text-2xl  flex justify-center font-bold mb-4 ">CKS GURUKULAN SCHOOL</h2>
                        <p className="     flex justify-center text-red-600 font-bold border-b-2 border-red-600">To be Affiliated to CBSE</p>

                        <div className="mt-8 ">
                            <div className='mb-4'>
                                <h3 className="text-xl font-bold mb-2">DAY SCHOLAR</h3>
                                <p>Veb.www.chsgurukulam.com</p>
                                <p>Ph. No 8112371616</p>
                                <p className='text-red-600 font-bold'>Email id qurukulam.edu2023@gmail.com</p>
                            </div>

                            <table className="min-w-full bg-white border border-gray-300 shadow-lg">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-1 md:p-3">CLASS</th>
                                        <td className="border border-gray-300 p-1 md:p-3">1-Ⅲ</td>
                                        <td className="border border-gray-300 p-1 md:p-3">IV-V</td>
                                        <td className="border border-gray-300 p-1 md:p-3">IX-X</td>
                                        <td className="border border-gray-300 p-1 md:p-3">XI-XII</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="border border-gray-300 p-1 md:p-3">TUITION FEES (QUARTERLY)</th>
                                        <td className="border border-gray-300 p-1 md:p-3">8400</td>
                                        <td className="border border-gray-300 p-1 md:p-3">8700</td>
                                        <td className="border border-gray-300 p-1 md:p-3">11,100</td>
                                        <td className="border border-gray-300 p-1 md:p-3">12,300</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-14 ">
                            <h3 className="text-xl font-bold mb-2">RESIDENTIAL SCHOLAR (BOARDING)</h3>

                            <table className="min-w-full bg-white border  border-gray-300 shadow-lg">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-1 md:p-3">CLASS</th>
                                        <th className="border border-gray-300 p-1 md:p-3">TUITION FEES (ANNUALLY)</th>
                                        <th className="border border-gray-300 p-1 md:p-3">BOARDING CHARGES (ANNUALLY)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-1 md:p-3">Ⅲ-Ⅰ</td>
                                        <td className="border border-gray-300 p-1 md:p-3">N/A</td>
                                        <td className="border border-gray-300 p-1 md:p-3">N/A</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-1 md:p-3">IV-V</td>
                                        <td className="border border-gray-300 p-1 md:p-3">46,800</td>
                                        <td className="border border-gray-300 p-1 md:p-3">66,000</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-1 md:p-3">IX-X</td>
                                        <td className="border border-gray-300 p-1 md:p-3">50,400</td>
                                        <td className="border border-gray-300 p-1 md:p-3">68,000</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">XI-XII</td>
                                        <td className="border border-gray-300 p-3">56,400</td>
                                        <td className="border border-gray-300 p-3">70,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4">
                            <li>
                                The admission fees of Rs. 10,000/- to be paid at the time of admission.
                            </li>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeeTable;
