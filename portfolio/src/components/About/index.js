import React from 'react';
import './style.scss'
import CV from '../assets/CV.pdf'

function About() {
    return(
        <section className='about-container' id='aboutme'>
            <p className='about-me'>About me</p>

            <div className='about-card'>
                <p className='about-card-paragraph'>Je m&apos;appelle Adam j&apos;ai 20 ans, developeur passionné d&apos;informatique.<br></br>
                <br></br> J&apos;ai acquis de solides connaissances en programmation grâce à mes études et à mes projets personnels,
                 notamment en HTML, CSS , JavaScript, SQL et React. Je suis passionné par le développement de logiciels et j&apos;aimerais intégrer une entreprise où je pourrais mettre mes compétences en pratique et continuer à apprendre et à me développer en tant que développeur.
                </p>
                <div className='card-btn-container'>
                    <a href={CV} download='CV de Adam'>
                        <button className='card-btn'>Télécharger le CV</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;