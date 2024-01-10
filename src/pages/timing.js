import React, { useEffect, useState, useRef } from 'react';
import Navbar from './navbar';
import { FaHome } from 'react-icons/fa';
import Anim from '../assets/mwesigwa-joel-jHvedTh-avo-unsplash (1).jpg';
import gsap from 'gsap';
import './YourStylesheet.css';

const Timing = () => {
  const cursorRef = useRef(null);
  const cursorMediasRef = useRef([]);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorMedias = cursorMediasRef.current;
    const navLinks = navLinksRef.current;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const setCursorX = gsap.quickTo(cursor, 'x', {
      duration: 0.6,
      ease: 'expo',
    });

    const setCursorY = gsap.quickTo(cursor, 'y', {
      duration: 0.6,
      ease: 'expo',
    });

    const handleMouseOver = (index) => {
      cursorMedias[index].classList.add('active');
      tl.play();
    };

    const handleMouseOut = (index) => {
      tl.reverse();
      cursorMedias[index].classList.remove('active');
    };

    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'expo.inOut',
    });

    navLinks.forEach((navLink, i) => {
      navLink.addEventListener('mouseover', () => handleMouseOver(i));
      navLink.addEventListener('mouseout', () => handleMouseOut(i));
    });

    return () => {
      navLinks.forEach((navLink, i) => {
        navLink.removeEventListener('mouseover', () => handleMouseOver(i));
        navLink.removeEventListener('mouseout', () => handleMouseOut(i));
      });
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className="flex h-auto flex-col bg-stone-100">
        <div className="mt-20 md:ml-32 ml-10">
          <div className="flex flex-col  gap-5">
            <div className="flex gap-1">
              <FaHome className="m-1" />
              <span>|</span>
              <div>About School</div>
            </div>
            <h1 className="text-7xl ">School timing </h1>
            <p className="text-3xl font-bold">2024-2025 Academic Year</p>
          </div>
          <div className=" flex justify-between  h-auto w-3/4  md:pb-10 pt-20 md:pt-32">
            <div className="flex text-lg gap-2 flex-col">
              <h1 className="text-3xl">Junior Wings</h1>
              <p className="text-xl text-red-600 mt-5 underline">mon-fri</p>
              <div className="flex gap-20 border-b-2">
                <p>Summer</p>
                <p>8:00 AM to 12:00PM</p>
              </div>
              <div className="flex gap-20 border-b-2">
                <p>Winter</p>
                <p>8:30 AM to 12:30PM</p>
              </div>
              <p>4TH SATURDAY WILL BE OFF...</p>
            </div>
            <div className="flex text-lg gap-2 flex-col">
              <h1 className="text-3xl">Junior Wings</h1>
              <p className="text-xl text-red-600 mt-5 underline">mon-fri</p>
              <div className="flex gap-20 border-b-2">
                <p>Summer</p>
                <p>8:00 AM to 12:00PM</p>
              </div>
              <div className="flex gap-20 border-b-2">
                <p>Winter</p>
                <p>8:30 AM to 12:30PM</p>
              </div>
              <p>4TH SATURDAY WILL BE OFF...</p>
            </div>
          </div>

          <div className=" flex flex-col gap-10 md:pb-10 pt-20 md:pt-12">
            <div c>
              <h1 className="text-6xl ">School Uniform</h1>
            </div>
            <div className="flex justify-between  h-auto w-3/4  md:pb-10">
              <div className="flex text-lg text-justify gap-2 flex-col">
                <h1 className="text-3xl  text-red-600 mt-5 underline">
                  <a
                    href="#"
                    className="nav__link"
                    ref={(el) => navLinksRef.current.push(el)}
                  >
                    Summer
                  </a>
                </h1>
                <p className="text-xl w-1/2">
                  Red & Blue Chacked Shirt and Blue Shorts/Skirts White Socks
                  and Black Shoes
                </p>
              </div>
              <div className="flex text-lg  gap-2 flex-col">
                <h1 className="text-3xl  text-red-600 mt-5 underline">
                  <a
                    href="#"
                    className="nav__link"
                    ref={(el) => navLinksRef.current.push(el)}
                  >
                    Winter
                  </a>
                </h1>
                <p className="text-xl w-3/4">
                  <li>Light Blue Shirt(Full) and Longish Blue Trousers</li>
                  <li>Red Half Pullover</li>
                  <li>Red Jacket/Blazer</li>
                </p>
              </div>
              <div className="cursor" ref={cursorRef}>
                <img
                  src={Anim}
                  alt="Cursor Media"
                  className="cursor__media "
                  ref={(el) => cursorMediasRef.current.push(el)}
                />
                <img
                  src={Anim}
                  alt="Cursor Media"
                  className="cursor__media "
                  ref={(el) => cursorMediasRef.current.push(el)}

                />
                <img
                  src="https://images.unsplash.com/photo-1643125978288-7c7c8babc5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt="Cursor Media"
                  className="cursor__media hidden"
                  ref={(el) => cursorMediasRef.current.push(el)}
                />
              </div>
            </div>

          </div>

         <div cla>
         <div className=" flex flex-col gap-10 md:pb-10 pt-20 md:pt-12">
            <div >
              <h1 className="text-6xl ">For parent  </h1>
            </div>
            <div className="flex flex-col justify-between  h-auto w-3/4  md:pb-10">
              <section id="importantPoints" className='flex flex-col gap-10'>
               <div className=' flex flex-col'>
               <h2 className='text-2xl font-bold'>Important Points for Parents</h2>
                
               <div className='ml-4 w-3/4 mt-2'>
               <li>Read all instructions carefully for compliance.</li>
                <li>Check the School Diary daily for Home-Work assignment, instructions of Class Teacher/Principal.</li>
                <li>For any query on academics/discipline, contact the concerned class teacher first before approaching Principal/Chairman.</li>
                <li>Notices/Circulars will be sent through students. Acknowledge such letters.</li>
                <li>It is mandatory to attend all PTA meetings.</li>
                <li>Ensure that your ward uses the prescribed pattern of uniform.</li>
                <li>Inform the school in writing of any change in residential addresses, telephone number, etc.</li>
                <li>Parents must collect their ward’s Progress Report in person. Reports will not be given to the students.</li>
             
               </div>
               </div>

               <div>
               <h2 className='text-2xl font-bold'>We can relate them to life in the following ways-</h2>
               <div className='ml-4 mt-2'>
                <li>Body as Earth</li>
                <li>Water as Mind</li>
                <li>Fire as Intelligence</li>
                <li>Air as Awareness</li>
                <li>Sky as Consciousness</li>
              </div>

               </div>
               <div>
               <p className='text-2xl font-bold'>With this thought, we allotted the four houses to the children-</p>
               <div className='ml-4 mt-2'>
                <li>Earth - Green</li>
                <li>Water - Blue</li>
                <li>Fire - Red</li>
                <li>Air - Yellow</li>
              </div>
               </div>
              </section>


            </div>

          </div>
         <div>
          
         </div>
         </div>

        </div>

      </div>
    </div>
  );
};

export default Timing;
