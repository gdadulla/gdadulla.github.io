import React from 'react';
import '../components/HeroSection.css';
import {BrowserView, MobileView} from 'react-device-detect';

function Contact() {
  return (
<>
    <MobileView>

    <div className='hero-container'>
    <img src="/videos/mobileBackground.jpg" className="mobileBackground"></img>
      <h1>Contact</h1>

      <div>
        <h2> Feel free to reach me at:</h2>
        <p>917-743-5043</p>
        <p> gdadulla1124@gmail.com</p>
      </div>
    </div>
    </MobileView>
    <BrowserView>\
    
    <div className='hero-container'>
       <video src="/videos/clouds.mp4" autoPlay loop muted />
      <h1>Contact</h1>

      <div className="content">
        <h2> Feel free to reach me at:</h2>
        <p>917-743-5043</p>
        <p> gdadulla1124@gmail.com</p>
      </div>
    </div>
    </BrowserView>

    </>
  );
}

export default Contact;