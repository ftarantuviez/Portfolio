import React from 'react'
import './About.css'
import me from '../../images/me.jpg'

function About() {
    return (
        <>
        <div className="about__container about__container2">
        <h2>More about me</h2>
            <div className="about__container-text col-7">
                <div className="answer">
                    <h4>Where I learned code?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                </div>
                <div className="answer">
                    <h4>Where I learned code?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                </div>
            </div>
            <div className="about__container-photo col-5">
                <img src={me} alt=""/>
            </div>

            <div className="stickAbout" id="s-1"></div>
            <div className="ballAbout" id="ba-1"></div>
            <div className="stickAbout" id="s-2"></div>
        </div>
        <div className="about__container about__container1">
            <div className="about__container-photo col-5">
                    
                </div>
                <div className="about__container-text col-7">
                    <div className="answer">
                        <h4>Where I learned code?</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                    </div>
                    <div className="answer">
                        <h4>Where I learned code?</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                    </div>
                </div>

            <div className="stickAbout" id="s-3"></div>
            <div className="ballAbout" id="ba-2"></div>
            <div className="stickAbout" id="s-4"></div>

            <div className="stickAbout" id="s-5"></div>
            <div className="ballAbout" id="ba-3"></div>
            <div className="stickAbout" id="s-6"></div>


            <div className="ballAbout" id="ba-4"></div>
            <div className="ballAbout" id="ba-5"></div>
            <div className="ballAbout" id="ba-6"></div>
            <div className="ballAbout" id="ba-7"></div>
        </div>
        <div className="about__container about__container3">
            <div className="about__video-container">
                <div className="about__video-container-gray">
                    <div className="video"></div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default About
