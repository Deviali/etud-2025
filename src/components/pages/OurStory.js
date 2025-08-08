import {React} from 'react'
import './OurStory.css';
import Navbar from './../Navbar';
import images from '../../constants/images';
import useFadeIn from "../hooks/UseFadeIn";
import Slider from "../../components/Slider"; 
import SectionLR from './../SectionLR';
import GallerySection from './../GallerySection';
function OurStory() {
  const addToRefs = useFadeIn();

  const imageItems = [
    images.Etud1, // Example image from your constants
    images.Etud2,
    images.Etud3,
  ];
  const leftColumnImages = [images.barfiller1,images.bgCocktail ,images.barfiller2, images.barfiller5,images.barfiller7];
  const rightColumnImages = [images.barfiller3,images.barfiller4,images.barfiller6, images.special1];
  
  return (
    <div className='Our-story'>
      <Navbar/>
      <Slider items={imageItems} TextForMiddle='' autoPlayInterval={3000}/>
      <div className="story-info"ref={addToRefs}>
        <p className="h__catorze">Our Story</p>
        <p className="p__raleway">"Dante, one of Greenwich Village’s most beloved stomping grounds, has undergone a transformation 104 years in the making. Its latest incarnation: the world’s best bar."</p>
      </div>
      <SectionLR 
      title="Live Music at ETUD"
      desc="Jazz is our foundation – but it doesn’t stop there. At ETUD, we host an evolving lineup of live performances, from classic jazz to funk, soul, groove, rock, and experimental nights. Our musicians are some of the most respected players in the country – and when they take the stage, the room listens."
      imgsrc={images.special1}
      />
      <div className="story-text"ref={addToRefs}>
        <p className="p__raleway">ETUD began in 2016 with one simple goal: to create a space where music isn’t just background, but it’s the main event. Built into the bones of the city, underground and dimly lit, ETUD feels like a secret you’re glad you found. We never tried to be everywhere — we just focused on getting it right here.</p>
        <p className="p__raleway">Over the years, we’ve become a trusted stage for some of Azerbaijan’s finest musicians, as well as a stop for international talent. From time to time, we also open the stage to rising artists ready to prove themselves. And as the music grew, so did our audience — thoughtful listeners who come for more than just a night out.</p>
        <p className="p__raleway">ETUD has also become a home for intimate private events — from birthdays and anniversaries to creative launches and cozy corporate gatherings. If it calls for atmosphere and great sound, it fits our space.</p>
        <p className="p__raleway">Beyond our own walls, we proudly support and curate live music experiences at festivals, cultural events, and other venues, carrying the same spirit and attention to sound wherever we go.

This is ETUD — for those who care about the craft. Who feel something when the lights go down and the first note hits.</p>
      </div>

      <SectionLR 
      title="Weekly Highlights:"
      desc={
        <>
          Tuesdays & Wednesdays – Jazz sessions with rotating artists
          <br />
          Fridays & Saturdays – Live bands & genre nights
          <br />
          Special Events – Debut shows, tribute nights & surprise guests
          <br />
          Every set is live. Every moment is real.
        </>
      }
      imgsrc={images.special2}
      />
      <GallerySection
        leftColumnImages={leftColumnImages}
        rightColumnImages={rightColumnImages}
      />

    </div>
  )
}

export default OurStory