
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from './components/Preloder/Preloder';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <Router>
      
       <div>
       <Navigation/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

       <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
    <Footer />
    </div>
  </Router>
  );
}

export default App;
