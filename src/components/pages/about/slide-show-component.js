import './slide-show-component.css';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide1 from './slide1-bg.png';
import slide2 from './slide2-bg.png';
import slide3 from './slide3-bg.png';

function SlideShowComponent() {
  const slideShowContent = [
    {
      img: slide1,
      caption: 'Slide 1',
      style: {
        padding: '20px',
        fontSize: '20px',
        background: '#efefef',
        textAlign: 'center',
        position: 'absolute',
        top: '200px',
        left: '100px',
        height: '300px',
        width: '500px',
      }
    },
    {
      img: slide2,
      caption: 'Slide 2',
      style: {
        padding: '20px',
        fontSize: '20px',
        background: '#efefef',
        textAlign: 'center',
        position: 'absolute',
        top: '200px',
      }
    },
    {
      img: slide3,
      caption: 'Slide 3',
      style: {
        padding: '20px',
        fontSize: '20px',
        background: '#efefef',
        textAlign: 'center',
        position: 'absolute',
        top: '300px',
      }
    },
  ];

  return (
      <Slide>
          {slideShowContent.map((slide, index)=> (
            <div key={index} className="slide-container">
                  <div style={{ 'backgroundImage': `url(${slide.img})` }}>
                      <span style={slide.style}>{slide.caption}</span>
                  </div>
              </div>
            ))} 
      </Slide>
  );
  }

export default SlideShowComponent;