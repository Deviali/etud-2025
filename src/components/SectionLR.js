import {React} from 'react';
import './Section.css';
import useFadeIn from './hooks/UseFadeIn';

function SectionLR({title,desc,imgsrc}) {

  const addToRefs = useFadeIn();

  return (
    <div className='section fadable'  ref={addToRefs}>
        <div className="section-border">
            <div className="section-text-field">
                <h1 className="h__catorze">{title}</h1>
                <p className="p__raleway">{desc}</p>
            </div>
        </div>
        <div className="section-image">
            <img src={imgsrc} alt="filler" />
        </div>
    </div>
  )
}

export default SectionLR



