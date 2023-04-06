import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
import Contact from './component/Contact';
import Navbar from'./component/Navbar';

function App() {
  return (
    <Router>
      <Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /></Navbar>
    </Router>
  );
}


export default App;