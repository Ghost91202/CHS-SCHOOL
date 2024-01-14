import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdVolumeOff } from 'react-icons/io';
import {  IoVolumeHigh } from 'react-icons/io5';
import Aboutimg from '../assets/medium-shot-girl-portrait-with-graduation-background_23-2150293611.avif';
import Aboutimg2 from '../assets/classic-school-bus-with-hand-drawn-style_23-2147833659.jpg';
import GsapVideo from '../assets/chsintro.mp4';

const AboutSummary = () => {
  // const videoRef = useRef(null);
  // const [isMuted, setIsMuted] = useState(true);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const video = videoRef.current;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: video,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 1,
  //       onUpdate: (self) => {
  //         const videoRect = video.getBoundingClientRect();
  //         const videoCenter = videoRect.top + videoRect.height / 2;

  //         // Check if the video is in the center of the screen
  //         if (videoCenter >= window.innerHeight / 3 && videoCenter <= window.innerHeight * 2 / 3) {
  //           // Apply your transition when the video is in the center
  //           gsap.to(video, {
  //             width: '100vw',
  //             height: '100vh',
  //             ease: 'power1.inOut',
  //           });
  //         } else {
  //           // Reset to initial size when the video is not in the center
  //           gsap.to(video, {
  //             width: '4vw',
  //             height: '0vh',
  //             ease: 'power0.1.inOut',
  //           });
  //         }
  //       },
  //     },
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  // const handleToggleMute = () => {
  //   const video = videoRef.current;
  //   video.muted = !video.muted;
  //   setIsMuted(!isMuted);
  // };
  return (
    <div className='relative bg-stone-100'>
      <div className='flex flex-col lg:flex-row justify-between bg-white  md:pb-24 rounded-3xl p-10  mx-4 md:ml-24 lg:ml-20 md:mb-10 mt-4'>
        <div className='flex flex-col gap-4 w-auto xl:w-auto sm:w-auto lg:w-1/2'>
          <h1 className='text-2xl lg:text-4xl'>Welcome TO C.H.S. Education Centre</h1>
          <div className='mt-4'>
            <p className='text-lg lg:text-2xl opacity-85'>Affiliation No : 2132820</p>
            <p className='text-md lg:text-lg'>
              On 9th April 2015 CHS Education Centre was incorporated to impart quality education to the students.
              It is affiliated to CBSE, Co-ed. English medium school of Kanpur. CHS is providing value-based quality
              education to develop a child's personality. We believe-
            </p>
          </div>
          
        </div>
        <img src={Aboutimg} alt=" chs school kanpur" className='hidden lg:block rounded-2xl w-full md:w-1/2 lg:w-1/3 ml-0 md:ml-32 lg:ml-0 mt-4 lg:mt-0' />
      </div>
     
      
      
    </div>
  );
};

export default AboutSummary;
