import React from "react";
import { useSpring, animated } from "react-spring";

export default function Component1(){
   
    const props2 = useSpring({from: {opacity: 0, marginTop: -500}, to: {opacity: 1, marginTop: 0}})

    return (
        
            <animated.div style={props2}> 

             <div style={container}>
             
            <h1 className="header1"> Welcome,</h1>
             <h1 className="header">I'm Germaine and this is my portfolio.</h1>
          
            <p className="coverContent"> Find out more. </p>
            </div>
            </animated.div>
    )


}

const container = {
    top: '10vw',
    position: 'relative'
}