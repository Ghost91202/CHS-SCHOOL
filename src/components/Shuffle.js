import React, { useState } from 'react';
import "./Shuffle.css"
const Shuffle = () => {
  const [isExplode, setIsExplode] = useState(false);

  const handleIconClick = () => {
    setIsExplode((prevExplode) => !prevExplode);
  };

  return (
    <div className='background'>
      <div className='container'>
        <div className={`services-icon home-icon ${isExplode ? 'explode' : ''}`} onClick={handleIconClick}>
          Services
          <span className={`content ${isExplode ? 'content-reveal' : ''}`}>
            Services Lorem ipsum dolar gonna add this
          </span>
        </div>

        <div className={`process-icon home-icon ${isExplode ? 'explode' : ''}`} onClick={handleIconClick}>
          Process
          <span className={`content ${isExplode ? 'content-reveal' : ''}`}>
            Process Lorem ipsum dolar gonna add this
          </span>
        </div>

        <div className={`team-icon home-icon ${isExplode ? 'explode' : ''}`} onClick={handleIconClick}>
          Team
          <span className={`content ${isExplode ? 'content-reveal' : ''}`}>
            Team Lorem ipsum dolar gonna add this
          </span>
        </div>

        <div className={`work-icon home-icon ${isExplode ? 'explode' : ''}`} onClick={handleIconClick}>
          Work
          <span className={`content ${isExplode ? 'content-reveal' : ''}`}>
            Work Lorem ipsum dolar gonna add this
          </span>
        </div>
      </div>
    </div>
  );
};

export default Shuffle;
