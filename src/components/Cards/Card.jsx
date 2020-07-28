import React from 'react'
import {Link} from 'react-router-dom'
import iphone from '../../images/iphone.png'
import mac from '../../images/mac.png'

function CardProject({imag}) {

    return (
        <div className="cardProject">
            <div className="cardProject__front"><img src={imag} alt="herean iamg"/></div>
            <div className="cardProject__back">
                <div className="cardProject__back-details">
                    <h2>TIlte here<br/><span>Here a subtitle</span></h2>
                    <p>Here I can put a really little description about the project</p>
                    <Link to="/portfolio/?project=1" className="btn btn-primary cardProject__button">Description</Link>
                    <a href="https://google.com" className="btn btn-secondary cardProject__button">Web</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject
