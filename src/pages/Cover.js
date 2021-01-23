import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Component1 from '../components/coverAnimations/Component1';
import Component2 from '../components/coverAnimations/Component2';
import "./Cover.css";
import "./main.css";
import '../components/HeroSection.css';


function Cover() {
  

 
  
  return (
    <>
    <div className="hero-container">
    
    <video src="/videos/clouds.mp4" autoPlay loop muted playsinline/>
        <div>
        <Component1  />
        </div>
        <div>
        <Component2 />
        </div>
        

       

     
      
       
    </div>
    
    </>
  );
}

export default Cover;