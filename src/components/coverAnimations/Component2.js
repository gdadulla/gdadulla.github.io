import React from "react";
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";

export default function Component2(){
   
    const props2 = useSpring({from: {opacity:0 }, to: {opacity: 1}, config: { delay: 100000, duration: 2000}})

    return (
        
            <animated.div style={props2}> 

             <div style={container}>
            <Link to="/work" onClick={this.forceUpdate}><button className="button"> Photography </button></Link>
            <br></br>
            <Link to="/resume" onClick={this.forceUpdate}><button className="button"> Resume </button></Link>
            </div>
            </animated.div>
    )


}

const container = {
    top: '10vw',
    position: 'relative'
}
