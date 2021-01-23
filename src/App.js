import React from 'react';
import {  HashRouter, Switch, Route } from 'react-router-dom';
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
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <ScrollToTop />
      <Route render = {({ location }) => (
        <Layout location = { location }>
        <Switch location = { location }>
          
        <Route exact path='/' exact component={Cover} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/work' component={Work} />
        {/* TO DO FOR ROUTING
        
            - Dynamic Routing for photography pages
            - UHhhh Dyanmic display for those so i only have one page
            - Switch for image sets?
            - YEA!
        
        */}
        <Route exact path='/work/:id' component={Photoset} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/sort' component={SortingVisualizerPage} />
        <Route component = { NotFound }/>
      </Switch> 
      </Layout>
      )}/>
          
      </HashRouter>
    </>
  );
}

export default App;
