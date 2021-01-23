import React from 'react';
import "./Home.css";
import "./main.css";
import { Link } from 'react-router-dom';
import '../components/HeroSection.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

function Home() {
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
    <div className="hero-container">
    <video src="/videos/clouds.mp4" autoPlay loop muted />
    <h1> Germaine Dadulla </h1>
    
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} className="aws-btn">
      <div data-src="./pictures/slideshow/1.jpg" />
      <div data-src="./pictures/slideshow/2.jpg" />
      <div data-src="./pictures/slideshow/3.jpg" />
      <div data-src="./pictures/slideshow/4.jpg" />
      <div data-src="./pictures/slideshow/5.jpg" />
      <div data-src="./pictures/slideshow/6.jpg" />
      <div data-src="./pictures/slideshow/7.jpg" />
    </AutoplaySlider>
   
    </div>
    <div className="padding"></div>
    </>
  );
}

export default Home;