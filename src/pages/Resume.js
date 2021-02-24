import React from 'react';
import { useSpring, animated } from 'react-spring'
import "./main.css";
import '../components/HeroSection.css';
import {BrowserView, MobileView} from 'react-device-detect';

const calc = (x, y) => [(y - window.innerHeight / 4) / 25, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Resume() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const props2 = useSpring({from: {opacity: 0, marginTop: -500}, to: {opacity: 1, marginTop: 0}})


  return (
    <>
   

    <animated.div style={props2}></animated.div>

       
        <MobileView maxDeviceWidth={440}>
        <div className="hero-container">
        <img src="/videos/mobileBackground.jpg" className="mobileBackground"></img>
    <h1> Resume </h1>
        <div className="content"> 
    <h3 className="underline" > Soft Skills</h3>
    <ul> 
      <li> Adept, capable, and diligent learner </li>
      <li> Detail-Oriented</li>
      <li> Creative Thinker</li>
    </ul>
    
    <h3 className="underline"> Hard Skills </h3>
    <ul> 
      <li> Java</li>
      <li> C#</li>
      <li> MERN/MEAN Stack Development </li>
      <li> Javascript </li>
      <li> HTML5, CSS </li>
      <li> WordPress </li>
      <li> SEO Understanding </li>
      <li> Responsive Web Design </li>
    </ul>

    <h3 className="underline" > Education </h3>
    <h4 className="italics"> University at Albany, Albany, NY Class of 2020</h4>
    <p className="resumeContent"> Computer Science with Applied Mathematics Major, Informatics Minor</p>
    <p className="resumeContent"> GPA 3.5</p>

    <h3 className="underline" > Job History </h3>
    <h4 className="italics"> Freelance Web Development -- 2019 - Present</h4>
    <ul>
      <li> Worked on multiple WordPress websites</li>
      <li> Constructed website layouts </li>
      <li> Responsive web design </li>
      <li> Examples: </li>
        <ul> 
          <li> Hopeforherfl.org</li>
          <li> Countercultivation.com</li>
        </ul>
      
    </ul>

    <h4 className="italics"> Ambac Assurance Corp -- 2018, 2019</h4>
    <p className="resumeContent"> New York, NY</p>
    <ul>
      <li> IT Applications Development Intern</li>
      <li> Assisted with Powershell scripting</li>
      <li> Tested applications</li>
      <li> Day-to-day IT helpdesk responsibilities </li>
    </ul>
    <h3> Hobbies </h3>
    <ul>
      <li> Photography, mainly street/documentary style film photography</li>
        <ul>
          <li> Secretary for University Photo Service at UAlbany, Senior Year</li>
        </ul>
    </ul>
    </div>
    </div>
        </MobileView>

        <BrowserView>
        <div className="hero-container">
    <video src="/videos/clouds.mp4" autoPlay loop muted playsinline/>
    <h1> Resume </h1>
        <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style= {{transform: props.xys.interpolate(trans) }}
    >
    <div className="content"> 
    <h3 className="underline"> Soft Skills</h3>
    <ul> 
      <li> Adept, capable, and diligent learner </li>
      <li> Detail-Oriented</li>
      <li> Creative Thinker</li>
    </ul>
    
    <h3 className="underline"> Hard Skills </h3>
    <ul> 
      <li> Java</li>
      <li> C#</li>
      <li> MERN Stack Development </li>
      <li> Javascript </li>
      <li> HTML5, CSS </li>
      <li> WordPress </li>
      <li> SEO Understanding </li>
      <li> Responsive Web Design </li>
    </ul>

    <h3 className="underline"> Education </h3>
    <h4 className="italics"> University at Albany, Albany, NY Class of 2020</h4>
    <p className="resumeContent"> Computer Science with Applied Mathematics Major, Informatics Minor</p>
    <p className="resumeContent"> GPA 3.5</p>

    <h3 className="underline"> Job History </h3>
    <h4 className="italics"> Freelance Web Development -- 2019 - Present</h4>
    <ul>
      <li> Worked on multiple WordPress websites</li>
      <li> Constructed website layouts </li>
      <li> Responsive web design </li>
      <li> Examples: </li>
        <ul> 
         <a href="https://www.Hopeforherfl.org" target="_blank" style={{color: 'orange'}}> <li> Hopeforherfl.org</li> </a>
         <a href="https://www.countercultivation.com" target="_blank" style={{color: 'orange'}}><li> Countercultivation.com</li> </a>
        </ul>
      
    </ul>

    <h4 className="italics"> Ambac Assurance Corp -- 2018, 2019</h4>
    <p className="resumeContent"> New York, NY</p>
    <ul>
      <li> IT Applications Development Intern</li>
      <li> Assisted with Powershell scripting</li>
      <li> Tested applications</li>
      <li> Day-to-day IT helpdesk responsibilities </li>
    </ul>
    <h3 className="underline"> Hobbies </h3>
    <ul>
      <li> Photography, mainly street/documentary style film photography</li>
        <ul>
          <li> Secretary for University Photo Service at UAlbany, Senior Year</li>
        </ul>
    </ul>
    </div>
    
    </animated.div>
    </div>
        </BrowserView>
        
        

    
  
    
    </>
  );
}

export default Resume;