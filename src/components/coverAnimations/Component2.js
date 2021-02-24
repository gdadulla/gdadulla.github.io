import React from "react";
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";

export default function Component2(){
   
    const props2 = useSpring({from: {opacity:0 }, to: {opacity: 1}, config: { delay: 100000, duration: 2000}})

    return (
        
            <animated.div style={props2}> 

             <div style={container}>
            <a onClick={() => window.location.href="/#/work"}><button className="button"> Photography </button></a>
            <br></br>
            <a onClick={() => window.location.href="/#/resume"}><button className="button"> Resume </button></a>
            </div>
            </animated.div>
    )


}

const container = {
    top: '10vw',
    position: 'relative'
}
