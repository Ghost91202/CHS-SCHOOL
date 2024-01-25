import React, { useState, useEffect } from 'react';
import Navbar from '../pages/navbar';
import Carousel from '../pages/heroslider';
import Levels from "../pages/levels";
import Footer from "../pages/footer";
import Mission from "../pages/mission";
import BookNow from "../pages/booknow";
import Values from "../pages/values";
import Facility from "./facility";
import AboutSummery from '../pages/aboutsummery';
import Modal from './modal.js';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set up a timer to show the modal after 20 seconds
    const timerId = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className='h-auto overflow-x-hidden bg-stone-100'>
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <Navbar />
      <Carousel />
      <Levels />
      <AboutSummery />
      <Mission />
      <Values />
      <BookNow  />
      <Facility />
      <Footer />
      {/* <Carousel images={images}  /> */}
    </div>
  );
};

export default Home;
