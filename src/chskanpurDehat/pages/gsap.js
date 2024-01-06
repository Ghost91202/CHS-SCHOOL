import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GsapVideo from '../../assets/chsintro.mp4';
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";

const VideoAnimation = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: () => {
          const scrollY = window.scrollY;
          const videoRect = video.getBoundingClientRect();
          const videoCenter = videoRect.top + videoRect.height / 2;

          // Check if the video is in the center of the screen
          if (videoCenter >= window.innerHeight / 3 && videoCenter <= window.innerHeight * 2 / 3) {
            // Apply your transition when the video is in the center
            gsap.to(video, {
              width: '100vw',
              height: '100vh',
              ease: 'power1.inOut',
            });
          } else {
            // Reset to initial size when the video is not in the center
            gsap.to(video, {
              width: '10vw',
              height: '10vh',
              ease: 'power0.1.inOut',
            });
          }
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleToggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div>
      {/* Content before the video */}
      <div style={{ height: '100vh', background: 'black' }}>
        Scroll down to see the animation
      </div>

      {/* Video container */}
      <div
        ref={videoRef}
        style={{
          position: 'relative',
          width: '10vw',
          height: '10vh',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Your video component goes here */}
        <video autoPlay muted={isMuted} loop style={{ width: '100%', height: '100%' }}>
          <source src={GsapVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Mute/Unmute button */}
        <button
          onClick={handleToggleMute}
          style={{
            position: 'absolute',
            top: '95%',
            left: '10%',
            transform: 'translate(-50%, -50%)',
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            
          }}
          className='text-3xl'
        >
          {isMuted ? <IoMdVolumeOff /> : <IoVolumeHigh />}
        </button>
      </div>

      {/* Content after the video */}
      <div style={{ height: '200vh', background: 'black' }}>
        Next section content
      </div>
    </div>
  );
};

export default VideoAnimation;
