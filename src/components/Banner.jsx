import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const banners = [
    assets.Banner1,
    assets.Banner2, 
    assets.Banner3,
    assets.Banner4
  ];

  const ZOOM_DURATION = 5000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, ZOOM_DURATION);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[620px] overflow-hidden rounded-lg shadow-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          style={{
            transition: 'all 2s ease-in-out' 
          }}
        >
          <img 
            src={banner} 
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg [text-shadow:_2px_2px_0_#EADFC8,_-2px_-2px_0_#EADFC8,_2px_-2px_0_#EADFC8,_-2px_2px_0_#EADFC8]">
    PLAN DE TRAVAIL
  </h1>
  <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg mt-2 [text-shadow:_1px_1px_0_#EADFC8,_-1px_-1px_0_#EADFC8,_1px_-1px_0_#EADFC8,_-1px_1px_0_#EADFC8]">
    Koozina
  </h2>
</div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;