import React from "react";
import "./GallerySection.css"; // CSS file for this component
import useFadeIn from "../components/hooks/UseFadeIn";


function GallerySection({ leftColumnImages, rightColumnImages }) {
  const addToRefs = useFadeIn();



  return (
    <div className="gallery-Section" ref={addToRefs}>
      <div className="gallery-column">
        {leftColumnImages.map((src, index) => (
          <img key={index} src={src} alt={`Left column image ${index}`} />
        ))}
      </div>
      <div className="gallery-column">
        {rightColumnImages.map((src, index) => (
          <img key={index} src={src} alt={`Right column image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default GallerySection;