import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import Navbar from '../pages/navbar';
import Acti from '../assets/Acti.jpg';
import Reactimg from '../assets/27.jfif';
import Nextjs from '../assets/Admission.jpg';
import './activities.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const filterSelection = (category) => {
    setSelectedCategory(category);
    setZoomedIndex(null); // Reset zoomedIndex when changing categories
  };

  const handleImageClick = (index) => {
    setZoomedIndex(index);
    setTimeout(() => {
      setZoomedIndex(null); // Reset zoomedIndex after a delay
    }, 5000); // Adjust the delay time (in milliseconds) as needed
  };

  const imgData = [
    { url: Reactimg, category: 'Holi', title: 'React.js' },
    { url: Nextjs, category: 'Holi', title: 'Next.js' },
    { url: 'https://i.postimg.cc/C570B6Hn/adi.jpg', category: 'Holi' },
    { url: 'https://i.postimg.cc/9XJs9TH9/hub-1.jpg', category: 'New Year' },
    { url: 'https://i.postimg.cc/T1g5jvYw/ro.jpg', category: 'New Year' },
    { url: 'https://i.postimg.cc/50ZFF2JT/pp7.jpg', category: 'New Year' },
    // Add more image data entries with different categories
  ];


  return (
    <div className='relative w-screen overflow-hidden h-auto'>
      <Navbar />
      <div className='flex flex-col ml-10 md:ml-40 mt-10 md:mt-20'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-1'>
            <FaHome className='m-1' />
            <span>|</span>
            <div> Admission</div>
            <span>|</span>
            <div> OUR Activities</div>
          </div>
          <h1 className='md:text-7xl text-3xl'>Activities</h1>
        </div>
      </div>
      <div className='w-screen overflow-hidden relative flex flex-col top-20 gap-10 items-center '>
        <div className='flex text-center gap-5 text-black p-8 md:p-20 mb-10 font-semibold justify-center items-center flex-col'>
          <img src={Acti} alt='' className='absolute -z-10 h-72 md:h-96 w-screen object-cover' />
          <h1 className='text-xl md:text-2xl lg:text-3xl text-white font-bold'>BUILD FUTURE WITH</h1>
          <div className='bg-white p-2 md:p-5 text-balance flex gap-2 md:gap-5 justify-center text-4xl md:text-7xl'>
            CHS <span className='text-red-600'>Education</span> Centre
          </div>
          <div className='w-3/4 md:w-full justify-center text-center flex items-center'>
            {/* Add any additional content or components here */}
          </div>
        </div>
        <div className='flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
          <div
            onClick={() => filterSelection('all')}
            className='cursor-pointer rounded-full bg-gray-300 px-4 py-2 text-md sm:text-lg md:text-xl lg:text-2xl'
          >
            Show All
          </div>
          <div
            onClick={() => filterSelection('Holi')}
            className='cursor-pointer rounded-full bg-gray-300 px-4 py-2 text-md sm:text-lg md:text-xl lg:text-2xl'
          >
            Holi
          </div>
          <div
            onClick={() => filterSelection('New Year')}
            className='cursor-pointer rounded-full bg-gray-300 px-4 py-2 text-md sm:text-lg md:text-xl lg:text-2xl'
          >
            New Year
          </div>
          <div
            onClick={() => filterSelection('Back-End')}
            className='cursor-pointer rounded-full bg-gray-300 px-4 py-2 text-md sm:text-lg md:text-xl lg:text-2xl'
          >
            Back-End
          </div>
          <div
            onClick={() => filterSelection('CMS')}
            className='cursor-pointer rounded-full bg-gray-300 px-4 py-2 text-md sm:text-lg md:text-xl lg:text-2xl'>
            CMS
          </div>
        </div>
         <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 xl:p-20 gap-4'>
        {imgData.map((img, index) => (
          <div
            key={index}
            className={`imgDiv ${selectedCategory === 'all' || img.category === selectedCategory ? 'show' : ''} ${
              zoomedIndex === index ? 'zoomed' : ''
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={img.url}
              alt='CHS EDUCATION CENTER'
              className='w-full h-full object-cover border border-gray-200 rounded-md'
            />
            {/* <p>{img.title}</p> */}
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Gallery;
