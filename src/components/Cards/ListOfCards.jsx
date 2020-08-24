import React from 'react'
import CardProject from './Card'
import './Styles.css'


function ListOfCards({projectsInfo, titleLevelProjects}) {
    return (
        <div className="container card-container">
            <h4>{titleLevelProjects}</h4>
            <div className="row listOfCards-row">
                {
                    projectsInfo.map(card => (
                        <div key={card.title} className="col-sm-6 col-lg-4 col-12 card-col">
                            <CardProject 
                                imag={card.imagesDevices}    
                                title={card.title}
                                shortDescription={card.shortDescription}    
                                subtitleCard={card.subtitleCard}
                                webLink={card.domain}    
                                route={card.route}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListOfCards
