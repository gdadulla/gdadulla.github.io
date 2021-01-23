import React from 'react';
import { useSpring, animated } from "react-spring";
import { PhotoData } from '../components/PhotoData';
import {BrowserView, MobileView} from 'react-device-detect';
import Masonry from 'react-masonry-css';
import '../components/grid.css';
import {withRouter, RouteComponentProps} from "react-router";

const breakpointColumnsObj = {
    default: 3,
    420: 1
  };
   

function Photoset(props: Photosetid) {
    const props2 = useSpring({from: {opacity: 0, marginTop: -500}, to: {opacity: 1, marginTop: 0}});
    const query = props.match.params.id;
    var items = [];
    
    return(
       
        <>
        <animated.div style={props2}></animated.div>
  

        {(() => {
            switch(query){
                case 'nyc':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('nyc')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                       
                                            <img src={item}/>   
                                       
                                          
                                       </div>
                              });
                        })}    
                        </>           
                    ); 
                case 'portraits':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('portraits')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    );      
                case 'streetmeat':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('streetmeat')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    );        
                case 'concerts':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('concert')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    );
                case 'uni':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('uni')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    ); 
                case 'kaaterskills':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('kaaterskills')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    );
                case 'b/w':
                    return (
                        <>
                        {PhotoData.filter(item => item.name.includes('b/w')).map(filtered => {
                            items = filtered.photos;
                            items = items.map(function(item) {
                                return <div className="image-container">
                                          <img src={item}/>
                                       </div>
                              });
                        })}    
                        </> 
                    );                                                         
            }

           
        })()}
        

      
        <MobileView>
        <div className="hero-container">
        <img src="/videos/mobileBackground.jpg" className="mobileBackground"></img>
    <h1>{query} </h1>
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
        <div className="hero-container">
    <video src="/videos/clouds.mp4" autoPlay loop muted playsinline/>
    <h1>{query} </h1>
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
    )
}

interface Photosetid extends RouteComponentProps {
    id: string;
}

export default withRouter(Photoset);