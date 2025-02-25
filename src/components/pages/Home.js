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
          <p className="h__catorze">Best Jazz bar of Baku</p>
          <p className="h__catorze">Hardcore Party Baby</p>
      </div>
      <SectionLR 
      title="title testing"
      desc="Under text for section"
      imgsrc={images.barfiller1}
      />
      <DynamicSection 
      className='fadable'
      title="title testing 2"
      desc="Under text for section 2"
      imgsrc={images.barfiller2}
      />
      <SectionLR
      className='fadable' 
      title="title testing 3"
      desc="Under text for section 3"
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