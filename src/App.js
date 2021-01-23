import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Photoset from './pages/Photoset';
import ScrollToTop from './components/ScrollToTop';
import Cover from './pages/Cover';
import SortingVisualizerPage from './pages/SortingVisualizerPage'
import ReactAudioPlayer from 'react-audio-player';


import './App.css';


function App() {

 

  return (
    <>
      <Router>
      <Navbar/>
      <ScrollToTop />
          <Switch>
          
            <Route path='/' exact component={Cover} />
            <Route path='/home' component={Home} />
            <Route exact path='/work' component={Work} />
            {/* TO DO FOR ROUTING
            
                - Dynamic Routing for photography pages
                - UHhhh Dyanmic display for those so i only have one page
                - Switch for image sets?
                - YEA!
            
            */}
            <Route exact path='/work/:id' component={Photoset} />
            <Route path='/contact' component={Contact} />
            <Route path='/resume' component={Resume} />
            <Route path='/sort' component={SortingVisualizerPage} />
          </Switch> 
      </Router>
    </>
  );
}

export default App;
