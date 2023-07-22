import React from 'react';
import './wavy-transition.css';

function WavyTransition(data) {
    const topPathPatterns = [
      "M-0.00,49.85 C148.08,135.33 347.85,-61.51 500.00,49.85 L501.35,161.89 L-0.90,157.97 Z",
      "M-0.00,49.85 C139.61,17.22 288.03,119.58 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z",
      "M-0.00,49.85 C135.10,84.15 288.03,119.58 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z",
      "M-0.00,49.85 C214.67,0.50 297.62,1.48 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"
    ]

    const bottomPathPatterns = [
      "M-0.00,49.85 C150.00,149.60 271.37,-49.85 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z",
      "M-0.00,49.85 C177.42,-20.17 345.59,130.40 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z",
      "M-0.00,49.85 C193.79,153.04 308.91,152.06 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z",
      "M-0.00,49.85 C201.69,5.42 295.94,5.42 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z"
    ]
    if (data.side === 'top' && data.index <= topPathPatterns.length) {
      return (
        <div className='wavy-container'>
        <svg className='wavy-svg-view-box' viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className='wavy-path' d={topPathPatterns[data.index]} style={{'fill' : data.color}}></path>
        </svg>
      </div>
    );
    } else if (data.side === 'bottom' && data.index <= bottomPathPatterns.length) {
      return (
        <div className='wavy-container'>
        <svg className='wavy-svg-view-box' viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className='wavy-path' d={bottomPathPatterns[data.index]} style={{'fill' : data.color}}></path>
        </svg>
      </div>
      );
    }
  }

export default WavyTransition;

