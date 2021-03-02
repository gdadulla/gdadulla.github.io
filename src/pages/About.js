import React from 'react';
import '../components/HeroSection.css';
import {BrowserView, MobileView} from 'react-device-detect';

function About() {
  return (
<>
    <MobileView>

    <div className='hero-container'>
    <img src="/videos/mobileBackground.jpg" className="mobileBackground"></img>
      <h1>About Me</h1>

      <div className="meContainer">
        <img src="/pictures/me.jpg" className="me"></img>
        <div className="aboutContent">

        <p>Hi! I'm Germaine Dadulla and I'm a graduate of the University at Albany with a Major in Computer Science with Applied Mathematics and a Minor in Informatics. 
          I have passions in App/Web Devolpement and Photography. 
          Thanks for stopping by and getting to know me and my work!
        </p>

        
        <h2> Feel free to reach me at:</h2>
        <p>917-743-5043</p>
        <p> gdadulla1124@gmail.com</p>
       
      </div>
      </div>
    </div>
    </MobileView>
    <BrowserView>
    
    <div className='hero-container'>
       <video src="/videos/clouds.mp4" autoPlay loop muted />
      <h1>About Me</h1>

      <div className="meContainer">
        <img src="/pictures/me.jpg" className="me"></img>
        <div className="aboutContent">

        <p>Hi! I'm Germaine Dadulla and I'm a graduate of the University at Albany with a Major in Computer Science with Applied Mathematics and a Minor in Informatics. 
          I have passions in App/Web Devolpement and Photography. 
          Thanks for stopping by and getting to know me and my work!
        </p>

        
        <h2> Feel free to reach me at:</h2>
        <p>917-743-5043</p>
        <p> gdadulla1124@gmail.com</p>
       
      </div>
      </div>
     
    </div>
    </BrowserView>

    </>
  );
}

export default About;