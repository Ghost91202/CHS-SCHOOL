import React, { useState } from 'react';
import GameGallery from './GameGallery.js';
import Footimg from "../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg";
import Footimg2 from "../assets/31ca36b5-3184-4ade-a667-ad102b59623b.jpg";
import Basketimg from "../assets/3.jfif";
import Image from "../assets/download.jpeg"
import Navbar from "../pages/navbar.js";

// Image data for the gallery
const imageGalleryData = {
  Football: [Footimg, Footimg2],
  Basketball: [Basketimg],
  Volleyball: [Footimg2],
  imageGallery: [Image]
  // Add more games and images as needed
};

const OurActivities = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameImageClick = (gameName) => {
    setSelectedGame(gameName);
  };

  const resetGallery = () => {
    setSelectedGame(null);
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-col justify-center our-activities ">
        <h2 className="text-3xl font-bold ml-32 mt-20 mb-4">Our Activities</h2>
        <div className="flex justify-center md:h-screen w-screen gap-2 space-x-4 mt-34 mb-4">
          <div className="flex flex-col h-96  gap-2 space-x-4 mt-32 mb-4">
            <div className='h-auto bg-white'>

              <img
                src={Footimg}
                alt="Football"
                className="cursor-pointer h-52 w-52 rounded-2xl   "
                onClick={() => handleGameImageClick('Football')}
              />
            </div>
            <div>
              <img
                src={Basketimg}
                alt="Basketball"
                className="cursor-pointer h-52 w-72 rounded-2xl  "
                onClick={() => handleGameImageClick('Basketball')}
              />
            </div>
            <div>
            </div>

          </div>
          <div className="flex flex-col gap-2 space-x-4 mt-32 mb-4">
            <div>
              <img
                src={Footimg2}
                alt="Volleyball"
                className="cursor-pointer h-52 w-96 -ml-20 rounded-2xl "
                onClick={() => handleGameImageClick('Volleyball')}
              />
            </div>
            <div>
              <img
                src={Image}
                alt="imageGallery"
                className="cursor-pointer h-52 w-52 rounded-2xl  "
                onClick={() => handleGameImageClick('imageGallery')}
              />
            </div>
          </div>

          {/* Add more game images as needed */}
          {/* ... */}
        </div>
        {selectedGame && (
          <>
            <h3 className="text-2xl font-bold mb-2">{`${selectedGame} Events`}</h3>
            <GameGallery images={imageGalleryData[selectedGame]} />
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-4"
              onClick={resetGallery}
            >
              Back to Games
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OurActivities;
