import React from 'react'
import './WhoAmI.css'
import photo from '../../images/photo.png' 
function WhoAmI() {

    const CardGenerator = (title, text, image, hrefRead) => {
        return(
            <div className="card">
                <div className="card__image">
                    <img src={image} alt="Here, an image"/>
                </div>
                <div className="card__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <a href={hrefRead} className="card__readMore"> <span> Read More</span></a>
            </div>
        )
    }

    return (
        <div id="whoami">
            <h2>Who am I?</h2>
            <div className="whoami__description">
                &nbsp;&nbsp; &nbsp; Francisco Tarantuviez is my name, I reside in the province of Mendoza, Argentina. I have been honing my programming skills for one year, mostly specialized in the frontend part.<br /> &nbsp;&nbsp;&nbsp; Discipline and commitment are two words that are part of my daily life, just like reading, studying, and other activities that you can learn about in the About section, where you can get to know me better, and perhaps share tastes.
            </div>
            <div className="whoami__cardsContainer">
                {CardGenerator('Design', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis magni maxime dicta perferendis excepturi maiores earum, aut unde fuga optio, labore nemo reiciendis incidunt ratione dolorum porro voluptates velit officiis!', photo, '#')}
                {CardGenerator('Code', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis magni maxime dicta perferendis excepturi maiores earum, aut unde fuga optio, labore nemo reiciendis incidunt ratione dolorum porro voluptates velit officiis!', photo, '#')}
                {CardGenerator('Launch', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis magni maxime dicta perferendis excepturi maiores earum, aut unde fuga optio, labore nemo reiciendis incidunt ratione dolorum porro voluptates velit officiis!', photo, '#')}
            </div>

            <div className="stick black" id="b-1"></div>
            <div className="stick black" id="b-2"></div>
            <div className="stick black" id="b-3"></div>
            <div className="stick gold" id="g-2"></div>
        </div>
    )
}

export default WhoAmI
