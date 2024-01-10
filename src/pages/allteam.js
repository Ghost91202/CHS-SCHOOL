import React from 'react';
import { useParams } from 'react-router-dom';
import Teamimg from "../assets/Admini1.jpeg"
import Teamimg2 from "../assets/Admini1.jpeg"
import Teamimg3 from "../assets/images3.jpeg"
import Navbar from "../pages/navbar"
import Footer from "../pages/footer"
import { FaHome } from "react-icons/fa";

// Sample data for team members
const teamMembers = [
    { 
        id: 1,
        firstLetter:"Honourable",
        name: 'Ch. Sukhram Singh Yadav',
        position: 'Chairman',
        image: Teamimg,
        summary:`Welcome to our exceptional school, where we encourage the motto "Learn to explore to learn." Our high-quality childcare and education are based on advanced and proven techniques. We provide an environment that nurtures your child's individuality and helps them explore the world with wonder and amazement. Our ultimate goal is to transform your child into a smart, confident, and determined leader, instilling values such as courage, strength, confidence, teamwork, and determination. From young toddlers to future leaders, we welcome your child with open arms. Join us today and let us help your child reach their full potential!`
     },
    { 
        id: 2,
        firstLetter:"Mr.",
        name: 'Mohit Chaudhari',
        position: 'Director',
        image: Teamimg,
        summary:`Welcome to our exceptional school, where we encourage the motto "Learn to explore to learn." Our high-quality childcare and education are based on advanced and proven techniques. We provide an environment that nurtures your child's individuality and helps them explore the world with wonder and amazement. Our ultimate goal is to transform your child into a smart, confident, and determined leader, instilling values such as courage, strength, confidence, teamwork, and determination. From young toddlers to future leaders, we welcome your child with open arms. Join us today and let us help your child reach their full potential!`
     },
    { 
        id: 3,
        firstLetter:"Mrs",
        name: 'Jyoti vij',
        position: 'Principal',
        image: Teamimg,
        summary:`Welcome to our exceptional school, where we encourage the motto "Learn to explore to learn." Our high-quality childcare and education are based on advanced and proven techniques. We provide an environment that nurtures your child's individuality and helps them explore the world with wonder and amazement. Our ultimate goal is to transform your child into a smart, confident, and determined leader, instilling values such as courage, strength, confidence, teamwork, and determination. From young toddlers to future leaders, we welcome your child with open arms. Join us today and let us help your child reach their full potential!`
     },
    { id: 4,firstLetter:"Honourable", name: 'Jane Smith', position: 'Forward', image: Teamimg2 },
    // Add more team members as needed
];

const TeamMemberDetails = () => {
    const { memberId } = useParams();
    const member = teamMembers.find((m) => m.id === parseInt(memberId));

    if (!member) {
        return <div>Member not found</div>;
    }

    const { name, position,firstLetter } = member;

    return (
        <div className='relative'>
            <Navbar />
            <div className='bg-stone-100 '>

                <div className='flex flex-col' >
                    <div className='sm:mt-20 mt-10 md:mt-32'>
                        <div className='flex  flex-col sm:ml-10 ml-10 md:ml-32 gap-5'>
                            <div className='flex gap-1'>
                                <FaHome className='m-1' />
                                <span>|</span>
                                    <div>our team</div>
                                    <span>|</span>
                                <div>{name}</div>
                            </div>

                        </div>
                    </div>


                    <div className='h-auto w-screen  pb-20 pt-12'>
                        <p></p>
                        <div className='flex  h-auto md:h-screen bg-white  md:ml-60 flex-col md:flex-row'>
                            <img src={`${member.image}`} alt={member.name || ''} className='-ml-20 rounded-lg h-1/2 w-auto md:mt-20 mix-blend-darken' />

                            <div className='flex flex-col mt-5 md:mt-20 ml-12'>
                                <p className='text-xl mb-10'>{position}</p>
                                <div className='mb-5'>
                                    <span className='text-4xl  border-b-2  border-red-500 '>{firstLetter},{name}</span>

                                </div>
                                <div className='mb-5 mt-5 '>
                                    <span className='text-2xl border-b-2  border-red-500 mb-3'>Dear Associate</span>
                                    <p className='text-xl mt-3  w-3/4 text-justify'>Welcome to our exceptional school, where we encourage the motto "Learn to explore to learn." Our high-quality childcare and education are based on advanced and proven techniques. We provide an environment that nurtures your child's individuality and helps them explore the world with wonder and amazement. Our ultimate goal is to transform your child into a smart, confident, and determined leader, instilling values such as courage, strength, confidence, teamwork, and determination. From young toddlers to future leaders, we welcome your child with open arms. Join us today and let us help your child reach their full potential!</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TeamMemberDetails;
