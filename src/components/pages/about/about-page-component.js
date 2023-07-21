import './about-page-component.css';
import React from 'react';
import SlideShowComponent from './slide-show-component';

function AboutComponent() {
    return (
      <div className="about-container">
        <SlideShowComponent />
      </div>
    );
  }

export default AboutComponent;