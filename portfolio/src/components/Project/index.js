import React from 'react';
import './style.scss'

function Project () {
    return(
        <div className="project-container">
            <p className="my-project">Mes projets</p>
            <div className='card-container'>
                <div className="card">
                <div className='card-details'>
                    <div className='card-details-frosted'>
                            <p className='card-details-text'>
                                Le projet est une plate-forme d&apos;apprentissage et d&apos;enseignement en ligne (e-learning) à destination des adultes et des étudiants. 
                                Le client souhaite mettre des extraits de cours et/ou support vidéo, 
                                PDF en ligne pour que ses clients potentiels puissent visionner une partie de ses contenus.</p>
                    </div>
                </div>
                <div className='card-details-btn-container'>
                        <a href="#" >
                            <button className='card-details-btn'>Lien Github</button>
                        </a>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Project;