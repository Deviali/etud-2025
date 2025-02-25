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
    images.fira, // Example image from your constants
    images.nicatAslanov,
    images.special1,
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
      title=""
      desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque."
      imgsrc={images.special1}
      />
      <div className="story-text"ref={addToRefs}>
        <p className="p__raleway">Now in its latest incarnation as Dante, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated selection of modern Italian cuisine, world-class cocktails, and an award-winning bar program. Welcome to Dante, where everything old is new again.</p>
        <p className="p__raleway">Now in its latest incarnation as Dante, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated selection of modern Italian cuisine, world-class cocktails, and an award-winning bar program. Welcome to Dante, where everything old is new again.</p>
        <p className="p__raleway">Now in its latest incarnation as Dante, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated selection of modern Italian cuisine, world-class cocktails, and an award-winning bar program. Welcome to Dante, where everything old is new again.</p>
        <p className="p__raleway">Now in its latest incarnation as Dante, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated selection of modern Italian cuisine, world-class cocktails, and an award-winning bar program. Welcome to Dante, where everything old is new again.</p>
      </div>

      <SectionLR 
      title=""
      desc="Lorem ipsum odor amet, consectetuer adipiscing elit. Est tempor mattis semper viverra vitae ullamcorper iaculis est. Urna cursus dignissim dictumst euismod enim interdum vulputate. Platea risus fringilla maximus at egestas curabitur elit. Duis varius arcu habitasse bibendum cras dapibus. Varius enim orci sociosqu eros nisi vulputate porta, aliquam scelerisque."
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