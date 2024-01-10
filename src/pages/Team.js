import React from 'react';
import { Link } from 'react-router-dom';
import Teamimg from "../assets/Admini1.jpeg"
import Teamimg2 from "../assets/Admini1.jpeg"
import Teamimg3 from "../assets/Admini1.jpeg"
// import Teamimg4 from "../assets/images4.jpeg"
import Navbar from './navbar';
import { FaHome } from "react-icons/fa";

// Sample data for team members
const teamMembers = [
    { id: 1,first:"Honourable ", name: 'Ch. Sukhram Singh Yadav', position: 'Chairman', image: Teamimg },
    { id: 2, first:"Honourable ", name: 'Mohit Choudhary', position: 'Director', image: Teamimg2 },
    { id: 3,first:"Honourable ", name: 'Jyoti Vij', position: 'Principal', image: Teamimg3 },
    // Add more team members as needed
];

const TeamList = () => {
    const chunks = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (v, i) => array.slice(i * size, i * size + size));

    const teamsChunks = chunks(teamMembers, 4);

    return (
        <div className='relative'>
            <Navbar />
            <div className='flex w-screen  flex-col '>
                <div className=' sm:mt-10 mt-10 md:mt-32 sm:ml-10 ml-10 lg:ml-32 md:ml-44'>
                    <div className='flex items-center gap-2 text-black text-sm'>
                        <FaHome className='text-xl' />
                        <span>|</span>
                        <span>Our Team</span>
                        <span>|</span>
                        
                    </div>
                </div>

                <div className='sm:ml-10 ml-5 md:ml-32 h-auto flex flex-col  item-center my-8'>
                <h1 className=' text-3xl font-bold'>Administrator</h1>
                    {teamsChunks.map((team, index) => (
                        <div key={index} className='grid mt-10 h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {team.map((member) => (
                                <div key={member.id} className='bg-white  p-4 rounded-lg shadow-md'>
                                    <Link to={`/team/${member.id}`} className='flex flex-col items-center'>
                                        <img src={member.image} alt={member.name} className='w-full h-60     object-cover rounded-md mb-4' />
                                        <p className='text-lg font-semibold'>{member.name}</p>
                                        <p className='text-sm text-gray-500'>{member.position}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamList;
