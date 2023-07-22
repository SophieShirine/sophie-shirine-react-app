import './about-page-component.css';
import React from 'react';
import SlideShowComponent from './slide-show-component';
import WavyTransition from '../../commons/wavy-transition';

function AboutComponent() {
    return (
      <div className="about-container">
        <SlideShowComponent />
        <WavyTransition side='top' index='0' color='lightpink'/>
        <div style={{'height':'300px', 'backgroundColor': 'lightpink'}}></div>
      </div>
    );
  }

export default AboutComponent;