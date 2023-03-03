import React from 'react';
import './style.scss';
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import About from '../About';
import Skills from '../Skills';
import Contact from '../Contact';
import Project from '../Project';
import Footer from '../Footer';

function Home () {
    return(
        <div className="home">
            <div className='home-socials'>
               <a href='https://github.com/Neyzoh'className='home-socials-icon'><FaGithub  color='#F3CA20' className='real-icon'/></a>
               <a href='https://www.linkedin.com/in/adam-ammour-a73a861a9/'className='home-socials-icon' ><FaLinkedinIn   color='#F3CA20' className='real-icon'/></a>
               <a href='https://twitter.com/Neyzxh'className='home-socials-icon' ><FaTwitter  color='#F3CA20' className='real-icon'/></a>
            </div>

            <div className='home-description'>
              <h1 className='home-description-title-1'>Hello,</h1>
              <h1 className='home-description-title-2'>I’m <span className='home-description-title-name'>Adam</span>,</h1>
              <h1 className='home-description-title-3'>web developer<span className='home-description-title-point'>.</span> </h1>
            </div>

            <div className='home-underdesc'>
                <h3 className='home-underdesc-title'>Front-end Developer.</h3>
            </div>
            <div className='home-image'>
            </div>

            <div className='scroll-down'>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />

        </div>
    )
}

export default Home;