import {React,useState,useEffect} from 'react'
import images from '../../constants/images'
import './Home.css';
import MainNavbar from './../MainNavbar';
import SectionLR from './../SectionLR';
import SectionRL from './../SectionRL';
import useFadeIn from './../hooks/UseFadeIn';


// Custom hook to get window width
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

function Home() {

  const width = useWindowWidth();
  const breakpoint = 1100; // Your threshold
  const DynamicSection = width < breakpoint ? SectionLR : SectionRL;

  const addToRefs = useFadeIn();

  return (
    <div className='Home'>
      <MainNavbar />
      <div className="home-welcome">
        
        <img src={images.etudlogo} alt="Etuds Logo" />
      </div>
      <div className="home-info fadable"  ref={addToRefs}>
          <p className="h__catorze">No Gimmicks. No Noise. Just Quality Sound</p>
          <p className="h__catorze">Good Drinks Good  Food, And A Vibe You Can't Fake.</p>
      </div>
      <SectionLR 
      title="ETUD BAKU"
      desc="Since 2016, ETUD has been Baku’s hidden corner for those who value mood, taste, and sound.Music lives at the heart of ETUD — jazz, soul, funk, rock, and more — but what makes this place special runs deeper than the setlist. It’s in the atmosphere, the conversations, the feeling that lingers whether the stage is lit or not."
      imgsrc={images.barfiller1}
      />
      <DynamicSection 
      className='fadable'
      title=""
      desc="Tucked underground and smoke-free, ETUD is shaped by intention. The lighting is low, the drinks are thoughtful, and the energy is steady. The bar offers a short, curated menu of cocktails, wines, and bar food — simple, elegant, and satisfying.

      It’s not just where music happens. It’s where time slows down a little."
      imgsrc={images.barfiller2}
      />
      <SectionLR
      className='fadable' 
      title=""
      desc="The focus has always been on doing things with care. From the music to the drinks, everything is chosen and served with intention. The bar offers a short but thoughtful menu, and the room is shaped for those who pay attention — to details, to feeling, to presence."
      imgsrc={images.barfiller3}
      />
      <div className="home-tomenu fadable"  ref={addToRefs}>
        <div className="home-tomenu-box">
          <p className="h__catorze">Food & Drinks</p>
          <p className="p__catorze mb-2">Click to see what we have to offer</p>
          <a href='/menu' className='button'>View Menu</a>
        </div>
          
      </div>
    </div>
  )
}

export default Home