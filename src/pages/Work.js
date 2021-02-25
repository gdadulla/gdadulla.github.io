import React from 'react';
import { Link , Switch} from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import {BrowserView, MobileView} from 'react-device-detect';
import '../components/HeroSection.css';
import '../components/grid.css';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  420: 1
};

function Work() {
  const props2 = useSpring({from: {opacity: 0, marginTop: -500}, to: {opacity: 1, marginTop: 0}});
  
  var items = [
    {id: 1, name: 'nyc', path: '/pictures/nyc/1.jpg'},
    {id: 2, name: 'portraits', path: "/pictures/portraits/1.jpg"},
    {id: 3, name: 'streetmeat', path: "/pictures/streetmeat/1.jpg"},
    {id: 4, name: 'kaaterskills', path: "/pictures/katterskills/1.jpg"},
    {id: 5, name: 'concerts', path: "/pictures/concert/2.jpg"},
    {id: 6, name: 'ualbany', path: "/pictures/ualbany/1.jpg"},
    {id: 7, name: 'b/w', path: "/pictures/bw/1.jpg"}
  ];

  items = items.map(function(item) {
    var pathname = "/work/" + item.name;
    return <div className="image-container">
              <img src={item.path}/>
  
              <a onClick={() => window.location.href=`#/work/${item.name}`} onUpdate={() => window.scrollTo(-1,-1)} activeClassName="current">  <div className="image-overlay"> 
                <div className="overlay-text"> {item.name} </div> 
              </div></a>
           </div>
  });

  return (
    <>

  
        <MobileView>
       
  <div className='hero-container'>
  <img src="/videos/mobileBackground.jpg" className="mobileBackground"></img>
  <animated.div style={props2}></animated.div>
           <h1>Selected Work</h1>
       <div className='grid-container'> 
       <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column">
         {items}
      </Masonry>
       </div>
      
           </div>
        </MobileView>
        <BrowserView>
        <div className='hero-container'>
           <video src="/videos/clouds.mp4" autoPlay loop muted/>
           <animated.div style={props2}></animated.div>
           <h1>Selected Work</h1>
       <div className='grid-container'> 
       <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column">
         {items}
      </Masonry>
       </div>
      
           </div>
        </BrowserView>
    
    
    
    </>
  );
}

export default Work;
