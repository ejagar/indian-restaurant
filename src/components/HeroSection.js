import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import MyVideo from './videos/india-vid.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
   <video 
            autoPlay
            loop
            muted
            playsInline>
            <source src={MyVideo} type="video/mp4"/>

        </video>
        <p>Takeaway and Home Delivery Available</p>
            <div className='hero-btns'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    CALL US
                    </Button>

                    
                    <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                    >
                    VIEW OUR MENU
                    </Button>
            </div>
    </div>
  );
}

export default HeroSection;