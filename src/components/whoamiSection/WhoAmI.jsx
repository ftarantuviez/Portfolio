import React from 'react'
import {Link} from 'react-router-dom'
import './WhoAmI.css'
import design from '../../images/design.png' 
import code from '../../images/code.png' 
import launch from '../../images/launch.png' 

function WhoAmI() {

    const CardGenerator = (title, text, image, hrefPortfolio) => {
        return(
            <div className="card">
                <div className="card__image">
                    <img src={image} alt="Here, an image"/>
                </div>
                <div className="card__content">
                    <h2 className="m-3">{title}</h2>
                    <p>{text} {hrefPortfolio && <Link className="portfolioLink" to="/portfolio"><strong>portfolio section</strong></Link>} </p>
                </div>
            </div>
        )
    }

    return (
        <div id="whoami">
            <h2 className="whoamititle">Who am I?</h2>
            <div className="whoami__description">
             Francisco Tarantuviez is my name, I reside in the province of Mendoza, Argentina. I have been honing my programming skills for one year, mostly specialized in the frontend part.<br /> Discipline and commitment are two words that are part of my daily life, just like reading, studying, and other activities that you can learn about in the About section, where you can get to know me better, and perhaps share tastes.
            </div>
            <div className="whoami__cardsContainer">
                {CardGenerator('Design', 'I like design. However, I am not (neither pretend) designer. I take Adobe XD as a friend and a very helpful tool. ', design)}
                {CardGenerator('Code', "Programming and make technologies is something that I'really enjoy. At this moment, I'm just working whith React library.", code)}
                {CardGenerator('Launch', `Design, programm and not launch? No it isn\'t. I\'m already have 30 projects, which once you can see in `, launch, true)}
            </div>

            
            <div className="stick gold" id="g-2"></div>
        </div>
    )
}

export default WhoAmI
