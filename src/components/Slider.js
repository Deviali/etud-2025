import React, { useState, useEffect } from "react";
import "./Slider.css";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Slider({ items,TextForMiddle, autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); 

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (!isAutoPlaying) return; 

    const interval = setInterval(() => {
      goToNext(); 
    }, autoPlayInterval);

    return () => clearInterval(interval); 
  }, [currentIndex, isAutoPlaying, autoPlayInterval]); 

  return (
    <div className="slider-container">
      <img
        key={currentIndex}
        src={items[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-background"
      />
      <div className="slider-overlay"></div>
      <div className="slider-controls">
        <button onClick={goToPrevious} className="arrow-btn arrow-left">
          <SlArrowLeft />
        </button>
        <button onClick={goToNext} className="arrow-btn arrow-right">
          <SlArrowRight />
        </button>
      </div>
      <p className="h__catorze main-text ">{TextForMiddle}</p>
      <button onClick={toggleAutoPlay} className="play-pause-btn">
          {isAutoPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
       </button>
    </div>
  );
}

export default Slider;