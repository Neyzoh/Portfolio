import React from 'react';
import './style/index.scss';

import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from '../../portfolio/src/components/About/index';
import Skills from '../../portfolio/src/components/Skills/index';
import Contact from '../../portfolio/src/components/Contact/index';
import Project from '../../portfolio/src/components/Project/index';
import Footer from '../../portfolio/src/components/Footer/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
