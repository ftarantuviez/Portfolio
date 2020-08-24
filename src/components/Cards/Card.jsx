import React from 'react'
import {Link} from 'react-router-dom'




function CardProject({imag, title, shortDescription, subtitleCard, webLink, route}) {

    return (
        <div className="cardProject">
            <div className="cardProject__front"><img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" onLoad={(e) => e.target.src = imag[0]} alt={title}/><h5>{title}</h5></div>
            <div className="cardProject__back">
                <div className="cardProject__back-details">
                    <h2>{title}<br/><span>{subtitleCard}</span></h2>
                    <p>{shortDescription}</p>
                    <Link to={`/project/${route}`} className="btn btn-primary cardProject__button">Description</Link>
                    {
                        webLink && <a href={webLink} target="_blank"  className="btn btn-secondary cardProject__button">Web</a>
                    }       
                </div>
            </div>
        </div>
    )
}

export default CardProject
