import React, { useState, useRef } from "react";
import "./VideoBackground.css"; // New CSS file for this component
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

function VideoBackground({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(true); // Starts playing by default
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="Video-beginning">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="video-controls">
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
        </button>
      </div>
    </div>
  );
}

export default VideoBackground;