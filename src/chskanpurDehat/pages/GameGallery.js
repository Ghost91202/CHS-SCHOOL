import React, { useState } from 'react';

const GameGallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(20);

  const loadMoreImages = () => {
    setVisibleImages((prevCount) => prevCount + 10);
  };

  return (
    <div className="image-gallery">
      {images.slice(0, visibleImages).map((image, index) => (
        <img key={index} src={image} alt={`Event ${index + 1}`} />
      ))}
      {visibleImages < images.length && (
        <button className="load-more-button" onClick={loadMoreImages}>
          Load More
        </button>
      )}
    </div>
  );
};

export default GameGallery;
