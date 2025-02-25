import React  from "react";
import './Jazz.css';
import Navbar from './../Navbar';
import images from '../../constants/images';
import useFadeIn from '../hooks/UseFadeIn';
import VideoBackground from './../VideoBackground';

function Jazz() {
  const addToRefs = useFadeIn();

  return (
    <div className='Jazz-container'>
          <Navbar />
          <VideoBackground videoSrc={images.mealvideo}/>
          <div className="jazz-history" ref={addToRefs}>
            <p className="h__catorze" >
            Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque.
            </p>
          </div>
          <div className="jazz-jazzman">
            <div className="jazzman-photo">
              <img src={images.fira} alt="fira" />
            </div>
            <div className="jazzman-info"><p className="p__catorze"> Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque.
           </p> </div>
          </div>
          <div className="jazz-jazzman">
            <div className="jazzman-info"><p className="p__catorze"> Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque.
           </p> </div>
           <div className="jazzman-photo">
              <img src={images.nicatAslanov} alt="fira" />
            </div>
          </div>
          <div className="jazz-jazzman">
            <div className="jazzman-photo">
              <img src={images.special1} alt="fira" />
            </div>
            <div className="jazzman-info"><p className="p__catorze"> Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque.
           </p> </div>
          </div>
          
    </div>
  )
}

export default Jazz